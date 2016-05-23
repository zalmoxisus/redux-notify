export const NOTIFY_TOP = 'NOTIFY_TOP';

export function notifyTop(caller) {
  // return { type: NOTIFY_TOP };
  return (dispatch, getState) => {
    const { counter } = getState();
    dispatch({ type: NOTIFY_TOP, caller: caller });
  };
}

export function delayedNotifyTop(caller, delay = 1000) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({ type: NOTIFY_TOP, caller: caller });
        resolve();
      }, delay)
    });
  };
}
