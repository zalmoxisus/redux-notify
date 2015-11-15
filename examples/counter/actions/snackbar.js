export const NOTIFY_SNACKBAR = 'NOTIFY_SNACKBAR';

export function notifySnackbar() {
  return (dispatch, getState) => {
    const { counter } = getState();
    dispatch({ type: NOTIFY_SNACKBAR, counter });
  };
}
