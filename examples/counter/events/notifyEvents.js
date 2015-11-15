import { INCREMENT_COUNTER, DECREMENT_COUNTER, increment } from '../actions/counter';

const events = [
  {
    catch: [DECREMENT_COUNTER],
    dispatch: increment
  }
];

export default events;
