import { combineReducers } from 'redux';
import session from './session';
import results from './results';
import createForm from './forms';
import delayAnimation from './delay';
import propmtEvent from './promptEvent';
import fetchReducer from './fetch';
import {
  UNIVERSITIES,
  CAREERS,
  REGIONS,
} from '../helpers/constants';

const signupForm = createForm('signupForm', [
  'name',
  'email',
  'password',
  'rut',
  'phone',
  'region',
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

const resources = combineReducers({
  univs: fetchReducer(UNIVERSITIES),
  careers: fetchReducer(CAREERS),
  regions: fetchReducer(REGIONS),
});

export default combineReducers({
  session,
  signupForm,
  ponderaForm,
  loginForm,
  delayAnimation,
  results,
  propmtEvent,
  resources,
});
