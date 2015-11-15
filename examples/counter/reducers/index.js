import { combineReducers } from 'redux';
import counter from './counter';
import notification from './notification';
import snackbar from './snackbar';

const rootReducer = combineReducers({
  counter,
  notification,
  snackbar
});

export default rootReducer;
