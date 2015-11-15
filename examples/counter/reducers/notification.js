import { NOTIFY_TOP } from '../actions/notification';

export default function notification(state = { message: '' }, action) {
  switch (action.type) {
    case NOTIFY_TOP:
      return {
        ...state,
        message: 'Changed counter to ' + action.counter,
        level: 'success'
      };
    default:
      return state;
  }
}
