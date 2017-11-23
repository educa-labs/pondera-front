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

const signupForm = createForm('signupForm', {
  name: { required: true },
  email: { required: true },
  password: { required: true },
  rut: { required: true },
  phone: { required: true },
  region: { required: true },
  accept: { required: true },
});

const ponderaForm = createForm('ponderaForm', {
  nem: { required: true },
  ranking: { required: true },
  language: { required: true },
  mah: { required: true },
  science: {},
  history: {},
  career: { required: true },
});

const loginForm = createForm('loginForm', {
  email: { required: true },
  password: { required: true },
});

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
