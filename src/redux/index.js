import { combineReducers } from 'redux';
import session from './session';
import results from './results';
import createForm from './forms';
import delayAnimation from './delay';
import propmtEvent from './promptEvent';
import fetch from './fetch';
import {
  UNIVERSITIES,
  CAREERS,
  REGIONS
} from '../helpers/constants';

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

const resources = combineReducers({
  univs: fetch(UNIVERSITIES),
  careers: fetch(CAREERS),
  regions: fetch(REGIONS),
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
