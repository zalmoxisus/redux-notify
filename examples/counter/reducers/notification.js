import { INCREMENT_COUNTER } from '../actions/counter';
import { NOTIFY_TOP } from '../actions/notification';

export default function notification(state = { message: '' }, action) {
  switch (action.type) {
    case NOTIFY_TOP:
      return {
        ...state,
        message: 'Dispatched ' + action.caller.type,
        level: (action.caller.type === INCREMENT_COUNTER ? 'success' : 'info')
      };
    default:
      return state;
  }
}
