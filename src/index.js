function isPromise(obj) {
  return !!obj
    && (typeof obj === 'object' || typeof obj === 'function')
    && typeof obj.then === 'function'
    && typeof obj.catch === 'function';
}

const notify = (events, config) => ({ dispatch }) => next => action => {
  let promiseChain;

  events.forEach( event => {
    if (event.catch.indexOf(action.type) !== -1) {
      if (config && config.noReverse) {
        if (action.notified) return;
        else action = {...action, notified: true};
      }
      if (event.dispatch instanceof Function) {
        setTimeout(() => { dispatch(event.dispatch(action)) }, 0);
      }
      else if (event.dispatch instanceof Array) {
        event.dispatch.forEach( fn => {
          setTimeout(() => {
            if (isPromise(promiseChain)) {
              promiseChain = promiseChain
                .then(() => dispatch(fn(action)))
                .catch(e => {throw new Error(e)});
            } else {
              const res = dispatch(fn(action));
              if (isPromise(res)) {
                promiseChain = res;
              }
            }
          }, 0);
        });
      }
      else throw new Error('Expected dispatch value to be a function or an array of functions.');
    }
  });
  return next(action);
};

export default notify;
