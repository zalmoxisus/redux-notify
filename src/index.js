const notify = (events) => ({ dispatch }) => next => action => {
  const returnValue = next(action);
  events.forEach( event => {
    if (event.catch.indexOf(action.type) !== -1) {
      dispatch(event.dispatch());
    }
  });
  return returnValue;
};

export default notify;
