import { combineReducers } from 'redux';
import session from './session';
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

const loginForm = createForm('loginForm', [
  'email',
  'password',
]);

export default combineReducers({
  session,
  signupForm,
  ponderaForm,
  loginForm,
});
