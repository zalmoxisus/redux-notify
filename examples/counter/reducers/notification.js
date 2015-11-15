import { NOTIFY_TOP } from '../actions/notification';

export default function notification(state = {}, action) {
  switch (action.type) {
    case NOTIFY_TOP:
      console.log('state',state);
      return {
        ...state,
        message: 'Changed counter to ' + action.counter,
        level: 'success'
      };
    default:
      return state;
  }
}
