import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { createUser, createSession } from '../helpers/api';
import { wait } from './delay';

/* TYPES */
const LOG_USER_REQUEST = 'LOG_USER_REQUEST';
const LOG_USER_FAILURE = 'LOG_USER_FAILURE';
const LOG_USER_SUCCESS = 'LOG_USER_SUCCESS';
const LOGOUT_USER = 'LOGOUT_USER';

/* ACTION CREATORS */

const logUserRequest = () => ({
  type: LOG_USER_REQUEST,
});

const logUserFailure = error => ({
  type: LOG_USER_FAILURE,
  error,
});

const logUserSucces = token => ({
  type: LOG_USER_SUCCESS,
  token,
});

export const logOut = () => ({
  type: LOGOUT_USER,
});

/* SELECTORS */

const getUser = state => state.session.user;
const isNotNull = user => user !== null;
export const isLogged = createSelector(getUser, isNotNull);

/* THUNKS */


export const registerUser = values => (
  async (dispatch) => {
    dispatch(logUserRequest());
    try {
      const user = await createUser(values);
      dispatch(logUserSucces(user.data.token));
      /* Esperamos un tiempo para la animacion */
      dispatch(wait(300));
    } catch (err) {
      dispatch(logUserFailure(err));
    }
  }
);

export const logUser = values => (
  async (dispatch) => {
    dispatch(logUserRequest());
    try {
      console.log(values);
      const user = await createSession(values);
      dispatch(logUserSucces(user.data.token));
      /* Esperamos un tiempo para la animacion */
      dispatch(wait(300));
    } catch (err) {
      dispatch(logUserFailure(err));
    }
  }
);

/* REDUCERS */

const loading = (state = false, action) => {
  switch (action.type) {
    case LOG_USER_REQUEST:
      return true;
    case LOG_USER_SUCCESS:
    case LOG_USER_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case LOG_USER_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const token = (state = null, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return null;
    case LOG_USER_SUCCESS:
      return action.token;
    default:
      return state;
  }
};

export default combineReducers({
  token,
  error,
  loading,
});

