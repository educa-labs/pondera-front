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

const registerFormOne = createForm('registerFormOne', {
  name: { required: true },
  email: { required: true },
  password: { required: true },
});

const registerFormTwo = createForm('registerFormTwo', {
  rut: { required: true },
  phone: { required: true },
  region: { required: true },
  accept: { required: true },
});

const ponderaForm = createForm('ponderaForm', {
  nem: { required: true },
  ranking: { required: true },
  language: { required: true },
  math: { required: true },
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

const forms = combineReducers({
  registerFormOne,
  registerFormTwo,
  ponderaForm,
  loginForm,
});

export default combineReducers({
  session,
  forms,
  delayAnimation,
  results,
  propmtEvent,
  resources,
});
