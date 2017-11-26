import { combineReducers } from 'redux';
import session from './session';
import results from './results';
import createForm from './forms';
import delay from './delay';
import propmtEvent from './promptEvent';
import fetchReducer from './fetch';
import {
  UNIVERSITIES,
  CAREERS,
  REGIONS,
} from '../helpers/constants';

const registerFormOne = createForm('registerFormOne', {
  name: { required: true },
  mail: { required: true },
  password: { required: true },
});

const registerFormTwo = createForm('registerFormTwo', {
  rut: { required: true },
  phone: { required: true },
  regionId: { required: true },
  accept: { required: true },
});

const ponderaForm = createForm('ponderaForm', {
  NEM: { required: true },
  ranking: { required: true },
  language: { required: true },
  math: { required: true },
  science: {},
  history: {},
  cId: { required: true },
});

const loginForm = createForm('loginForm', {
  mail: { required: true },
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
  delay,
  results,
  propmtEvent,
  resources,
});
