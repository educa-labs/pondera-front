import { combineReducers } from 'redux';
import { requestPonderation } from '../helpers/api';

const PONDERA_REQUEST = 'PONDERA_REQUEST';
const PONDERA_FAILURE = 'PONDERA_FAILURE';
const PONDERA_SUCCESS = 'PONDERA_SUCCESS';


/* ACTION CREATORS */

const ponderaRequest = () => ({
  type: PONDERA_REQUEST,
});

const ponderaFailure = error => ({
  type: PONDERA_FAILURE,
  error,
});

const ponderaSuccess = result => ({
  type: PONDERA_SUCCESS,
  result,
});


/* THUNK */

export const calculatePonderation = (values, token) => (
  async (dispatch) => {
    dispatch(ponderaRequest());
    try {
      const now = new Date();
      const result = await requestPonderation(values, token);
      const diff = new Date() - now;
      if (diff < 500) {
        setTimeout(() => {
          dispatch(ponderaSuccess(result.data));
        }, 500 - diff);
      } else {
        dispatch(ponderaSuccess(result.data));
      }
    } catch (err) {
      dispatch(ponderaFailure(err));
    }
  }
);

/* SELECTORS */


/* REDUCERS */

const loading = (state = false, action) => {
  switch (action.type) {
    case PONDERA_REQUEST:
      return true;
    case PONDERA_SUCCESS:
    case PONDERA_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case PONDERA_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const result = (state = null, action) => {
  switch (action.type) {
    case PONDERA_SUCCESS:
      return action.result;
    default:
      return state;
  }
};

export default combineReducers({
  result,
  error,
  loading,
});
