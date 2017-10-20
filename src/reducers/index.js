import { combineReducers } from 'redux';
import user from './user';
import register from './register';

export default combineReducers({
  user,
  register,
});
