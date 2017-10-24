import { combineReducers } from 'redux';
import user from './user';
import createForm from './forms';

const signupForm = createForm('signupForm', [
  'name',
  'email',
  'password',
  'rut',
  'phone',
  'city',
  'accept',
]);

export default combineReducers({
  user,
  signupForm,
});
