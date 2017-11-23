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

export const setFieldValue = formName => (fieldName, value) => ({
  type: SET_FORM_VALUE,
  formName,
  fieldName,
  value,
});

const validationError = formName => (fieldName, error) => ({
  type: VALIDATION_ERROR,
  formName,
  fieldName,
  error,
});

export const resetForm = formName => () => ({
  type: RESET_FORM,
  formName,
});

/* SIDE EFFECTS */

const getValues = (fields) => {
  const values = {};
  Object.keys(fields).forEach((key) => {
    values[key] = fields[key].value;
  });
  return values;
};

const getErrors = (fields) => {
  const errors = {};
  Object.keys(fields).forEach((key) => {
    errors[key] = fields[key].error;
  });
  return errors;
};

export const submitForm = formName => (onSubmit, onSubmitError) => (
  (dispatch, getState) => {
    const fields = getState().forms[formName];
    let validForm = true;
    Object.keys(fields).forEach((key) => {
      const field = fields[key];
      if (field.error) {
        validForm = false;
        return;
      }
      if (field.required && !field.touched) {
        validForm = false;
        dispatch(validationError(formName)(key, 'Campo requerido'));
      }
    });
    if (validForm) {
      onSubmit(getValues(fields));
    } else if (onSubmitError) onSubmitError(getErrors(fields));
  }
);

export const validateField = formName => (fieldName, validator) => (
  async (dispatch, getState) => {
    const field = getState().forms[formName][fieldName];
    try {
      await validator(field.value);
    } catch (error) {
      dispatch(validationError(formName)(fieldName, error.message));
    }
  }
);


/* REDUCERS */


const createFormReducer = (formName, fields) => {
  const createInitalState = ({ defaultValue, required }) => ({
    value: defaultValue || '',
    error: null,
    touched: false,
    required,
  });
  const createFieldReducer = (fieldName, field) => {
    const error = (state = null, action) => {
      switch (action.type) {
        case VALIDATION_ERROR:
          return action.error;
        case SET_FORM_VALUE:
          if (is.not.null(state)) return null;
          return state;
        default:
          return state;
      }
    };

    const value = (state = field.defaultValue || '', action) => {
      switch (action.type) {
        case SET_FORM_VALUE:
          return action.value;
        case RESET_FORM:
          return field.defaultValue || '';
        default:
          return state;
      }
    };

    const touched = (state = false, action) => {
      switch (action.type) {
        case SET_FORM_VALUE:
          if (!state) return true;
          return state;
        case RESET_FORM:
          return false;
        default:
          return state;
      }
    };

    const required = (state = field.required || false) => state;

    return (state = createInitalState(field), action) => {
      if (action.fieldName !== fieldName) return state;
      return combineReducers({
        value,
        error,
        touched,
        required,
      })(state, action);
    };
  };

  const reducers = {};
  const initialState = {};
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    initialState[key] = createInitalState(field);
    reducers[key] = createFieldReducer(key, field);
  });


  return (state = initialState, action) => {
    if (formName !== action.formName) return state;
    return combineReducers(reducers)(state, action);
  };
};


export default createFormReducer;

