import { combineReducers } from 'redux';
import is from 'is_js';

/* TYPES */

const SET_FORM_VALUE = 'SET_FORM_VALUE';
const SUBMIT_FAILURE = 'SUBMIT_FAILURE';
const RESET_FORM = 'RESET_FORM';
const VALIDATION_ERROR = 'VALIDATON_ERROR';

/* ACTION CREATORS */

export const submitFailure = formName => errors => ({
  type: SUBMIT_FAILURE,
  formName,
  errors,
});

export const setFieldValue = formName => (field, value) => ({
  type: SET_FORM_VALUE,
  formName,
  field,
  value,
});

export const resetForm = formName => () => ({
  type: RESET_FORM,
  formName,
});

const validationError = formName => error => ({
  type: VALIDATION_ERROR,
  formName,
  error,
});

/* SIDE EFFECTS */

export const submitForm = formName => (onSubmit, validator, fields) => (
  (dispatch, getState) => {
    const { values } = getState()[formName];
    const errors = {};
    if (is.existy(validator)) {
      fields.forEach((field) => {
        validator(values[field]);
        errors[field] = validator(values[field]);
      });
    }

    onSubmit(values);
  }
);

export const validateField = formName => (validator, fieldName) => (
  async (dispatch, getState) => {
    const { values } = getState()[formName];
    try {
      await validator(values[fieldName]);
    } catch (error) {
      dispatch(validationError(error));
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
    if (formName !== action.formName) return state;
    switch (action.type) {
      case SET_FORM_VALUE:
        return {
          ...state,
          [action.field]: action.value,
        };
      case RESET_FORM:
        return initialValues;
      default:
        return state;
    }
  };

  const errorsReducer = (state = initialErrors, action) => {
    if (formName !== action.formName) return state;
    switch (action.type) {
      case SET_FORM_VALUE:
        return removeError(state, action);
      case SUBMIT_FAILURE:
        return Object.assign({}, state, action.errors);
      default:
        return state;
    }
  };


  return (state, action) => (
    combineReducers({
      values: valuesReducer,
      errors: errorsReducer,
    })(state, action)
  );
};


export default createFormReducer;

