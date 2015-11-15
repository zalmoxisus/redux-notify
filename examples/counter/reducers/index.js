import { combineReducers } from 'redux';
import counter from './counter';
import notification from './notification';

const rootReducer = combineReducers({
  counter,
  notification
});

export default rootReducer;
