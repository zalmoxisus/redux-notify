export const NOTIFY_TOP = 'NOTIFY_TOP';

export function notifyTop(caller) {
  // return { type: NOTIFY_TOP };
  return (dispatch, getState) => {
    const { counter } = getState();
    dispatch({ type: NOTIFY_TOP, caller: caller });
  };
}
