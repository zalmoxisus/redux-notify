const notify = (events) => ({ dispatch }) => next => action => {
  const returnValue = next(action);
  events.forEach( event => {
    if (event.catch.indexOf(action.type) !== -1) {
      if (event.dispatch instanceof Function) dispatch(event.dispatch(action));
      else if (event.dispatch instanceof Array) {
        event.dispatch.forEach( fn => setTimeout(() => { dispatch(fn(action)) }, 0) );
      }
      else throw new Error('Expected dispatch value to be a function or an array of functions.');
    }
  });
  return returnValue;
};

export default notify;
