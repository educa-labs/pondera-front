import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import is from 'is_js';
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
  uId: {},
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


const univsSelector = state => state.resources.univs.data;
const careersSelector = state => state.resources.careers.data;
const uIdSelector = state => state.forms.ponderaForm.uId.value;
const cIdSelector = state => state.forms.ponderaForm.cId.value;

const resultTitleSelector = (univs, careers, uId, cId) => {
  if (is.any.empty(univs, careers, uId, cId)) return '';
  const career = careers.filter(car => car.id === cId)[0];
  const univ = univs.filter(uni => uni.id === uId)[0];
  try {
    return `${career.title} en ${univ.title}`;
  } catch (err) {
    console.log(univs, careers, uId, cId);
    return '';
  }
};

export const careerNameSelector = createSelector(
  univsSelector,
  careersSelector,
  uIdSelector,
  cIdSelector,
  resultTitleSelector,
);


export default combineReducers({
  session,
  forms,
  delay,
  results,
  propmtEvent,
  resources,
});
