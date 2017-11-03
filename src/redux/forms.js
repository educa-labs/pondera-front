import { createSelector } from 'reselect';
import { combineReducers } from 'redux';
import is from 'is_js';

/* TYPES */

const SET_FORM_VALUE = 'SET_FORM_VALUE';
const SUBMIT_FAILURE = 'SUBMIT_FAILURE';

/* ACTION CREATORS */

export const submitFailure = (formName, errors) => ({
  type: SUBMIT_FAILURE,
  formName,
  errors,
});

export const logChange = (formName, field, value) => ({
  type: SET_FORM_VALUE,
  formName,
  field,
  value,
});

/* SELECTORS */

const getErrors = state => state.errors;
const getValues = state => state.values;

const isValidForm = (errors) => {
  if (is.empty(errors)) return true;
  let valid = true;
  Object.keys(errors).forEach((field) => {
    if (is.not.null(errors[field])) {
      valid = false;
    }
  });
  return valid;
};

export const validFormSelector = createSelector(getErrors, getValues, isValidForm);


/* SIDE EFFECTS */

export const submitForm = (formName, onSubmit, validator, fields) => (
  (dispatch, getState) => {
    const { values } = getState()[formName];
    const errors = {};
    if (is.existy(validator)) {
      fields.forEach((field) => {
        validator(values[field]);
        errors[field] = validator(values[field]);
      });
    }
    if (isValidForm(errors)) {
      onSubmit(values);
    } else {
      dispatch(submitFailure(formName, errors));
    }
  }
);


/* REDUCERS */


const removeError = (state, action) => {
  if (is.not.null(state[action.field])) {
    return Object.assign({}, state, {
      [action.field]: null,
    });
  }
  return state;
};

const createFormReducer = (formName, fields) => {
  const initialValues = {};
  const initialErrors = {};
  fields.forEach((field) => {
    initialValues[field] = '';
    initialErrors[field] = null;
  });

  const valuesReducer = (state = initialValues, action) => {
    switch (action.type) {
      case SET_FORM_VALUE:
        return {
          ...state,
          [action.field]: action.value,
        };
      default:
        return state;
    }
  };

  const errorsReducer = (state = initialErrors, action) => {
    switch (action.type) {
      case SET_FORM_VALUE:
        return removeError(state, action);
      case SUBMIT_FAILURE:
        return Object.assign({}, state, action.errors);
      default:
        return state;
    }
  };

  const initialState = {
    values: initialValues,
    errors: initialErrors,
  };

  const formReducer = (state = initialState, action) => {
    if (formName !== action.formName) return state;
    return combineReducers({
      values: valuesReducer,
      errors: errorsReducer,
    })(state, action);
  };
  return formReducer;
};


export default createFormReducer;

