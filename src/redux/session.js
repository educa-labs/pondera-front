import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { createUser, createSession } from '../helpers/api';
import { saveToken, loadToken, clearStore } from '../helpers/storage';
import { wait } from './delay';

/* TYPES */
const LOG_USER_REQUEST = 'LOG_USER_REQUEST';
const LOG_USER_FAILURE = 'LOG_USER_FAILURE';
const LOG_USER_SUCCESS = 'LOG_USER_SUCCESS';
const LOGOUT_USER = 'LOGOUT_USER';
const STORAGE_REQUEST = 'STORAGE_REQUEST';
const STORAGE_ERROR = 'STORAGE_ERROR';
const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';
const LOAD_USER_TOKEN = 'LOAD_USER_TOKEN';

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

const storageRequest = () => ({
  type: STORAGE_REQUEST,
});

const storageError = () => ({
  type: STORAGE_ERROR,
});

const saveUserSuccess = () => ({
  type: SAVE_USER_TOKEN,
});

const loadUserSuccess = token => ({
  type: LOAD_USER_TOKEN,
  token,
});

const logOut = () => ({
  type: LOGOUT_USER,
});

/* SELECTORS */

const getUser = state => state.session.user;
const isNotNull = user => user !== null;
export const isLogged = createSelector(getUser, isNotNull);

/* THUNKS */

const saveUserToken = token => (
  async (dispatch) => {
    try {
      await saveToken(token);
      dispatch(saveUserSuccess());
    } catch (error) {
      console.log(error);
    }
  }
);

export const registerUser = values => (
  async (dispatch) => {
    dispatch(logUserRequest());
    try {
      const user = await createUser(values);
      /* Esperamos un tiempo para la animacion */
      dispatch(wait(300));
      dispatch(logUserSucces(user.data.token));
      dispatch(saveUserToken(user.data.token));
    } catch (err) {
      if (err.response) {
        dispatch(logUserFailure(err.response.data.message));
      } else if (err.request) {
        dispatch(logUserFailure('Oops, algo salio mal, vuelve a intentarlo'));
      }
    }
  }
);

export const logUser = values => (
  async (dispatch) => {
    dispatch(logUserRequest());
    try {
      const user = await createSession(values);
      /* Esperamos un tiempo para la animacion */
      dispatch(wait(300));
      dispatch(logUserSucces(user.data.token));
      dispatch(saveUserToken(user.data.token));
    } catch (err) {
      if (err.response) {
        dispatch(logUserFailure(err.response.data.message));
      } else if (err.request) {
        dispatch(logUserFailure('Oops, algo salio mal, vuelve a intentarlo'));
      }
    }
  }
);

export const logoutUser = () => (
  async (dispatch) => {
    try {
      await clearStore();
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  }
);

export const loadUserToken = () => (
  async (dispatch) => {
    dispatch(storageRequest());
    try {
      const token = await loadToken();
      dispatch(loadUserSuccess(token));
    } catch (error) {
      dispatch(storageError());
      console.log(error);
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

const storageLoading = (state = true, action) => {
  switch (action.type) {
    case STORAGE_REQUEST:
      return true;
    case STORAGE_ERROR:
    case SAVE_USER_TOKEN:
    case LOAD_USER_TOKEN:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case LOG_USER_FAILURE:
      return action.error;
    case LOG_USER_SUCCESS:
      return null;
    default:
      return state;
  }
};

const token = (state = null, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return null;
    case LOAD_USER_TOKEN:
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
  storageLoading,
});

