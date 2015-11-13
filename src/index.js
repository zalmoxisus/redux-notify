const notify = (events, config) => ({ dispatch }) => next => action => {
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
        event.dispatch.forEach( fn => setTimeout(() => { dispatch(fn(action)) }, 0) );
      }
      else throw new Error('Expected dispatch value to be a function or an array of functions.');
    }
  });
  return next(action);
};

export default notify;
