import { NOTIFY_SNACKBAR } from '../actions/snackbar';

export default function notification(state = { label: '' }, action) {
  switch (action.type) {
    case NOTIFY_SNACKBAR:
      return {
        ...state,
        label: 'Changed counter to ' + action.counter
      };
    default:
      return state;
  }
}
