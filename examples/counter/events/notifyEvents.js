import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import { notifyTop } from '../actions/notification';

const events = [
  {
    catch: [INCREMENT_COUNTER, DECREMENT_COUNTER],
    dispatch: notifyTop
  }
];

export default events;
