import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import { notifyTop } from '../actions/notification';
import { notifySnackbar } from '../actions/snackbar';

const events = [
  {
    catch: [INCREMENT_COUNTER, DECREMENT_COUNTER],
    dispatch: [notifyTop, notifySnackbar]
  }
];

export default events;
