import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import { notifyTop, delayedNotifyTop } from '../actions/notification';
import { notifySnackbar } from '../actions/snackbar';

const events = [
  {
    catch: [INCREMENT_COUNTER, DECREMENT_COUNTER],
    dispatch: [delayedNotifyTop, notifySnackbar]
  }
];

export default events;
