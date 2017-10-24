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

const ponderaForm = createForm('ponderaForm', [
  'nem',
  'ranking',
  'language',
  'math',
  'science',
  'history',
]);

export default combineReducers({
  user,
  signupForm,
  ponderaForm,
});
