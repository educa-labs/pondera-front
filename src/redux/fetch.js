import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { getResource } from '../helpers/api';

/* TYPES */
const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_FAILURE = 'FETCH_FAILURE';
const FETCH_SUCCESS = 'FETCH_SUCCESS';

/* ACTION CREATORS */

const fetchRequest = resource => ({
  type: FETCH_REQUEST,
  resource,
});

const fetchFailure = (resource, error) => ({
  type: FETCH_FAILURE,
  resource,
  error,
});

const fetchSuccess = (resource, data) => ({
  type: FETCH_SUCCESS,
  resource,
  data,
});

/* SIDE EFFECTS */

export const fetch = (resource, ...args) => (
  async (dispatch) => {
    dispatch(fetchRequest(resource));
    try {
      const res = await getResource(resource, ...args);
      dispatch(fetchSuccess(resource, res.data));
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
      dispatch(fetchFailure(resource, error));
    }
  }
);

/* SELECTORS */

const getResources = state => state.resources;
const getIsLoading = (resources) => {
  let res = false;
  Object.keys(resources).forEach((key) => {
    if (resources[key].loading) res = true;
  });
  return res;
};

export const isLoading = createSelector(getResources, getIsLoading);

/* REDUCERS */

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return true;
    case FETCH_SUCCESS:
    case FETCH_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const data = (state = null, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.data;
    default:
      return state;
  }
};


const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default resource => (
  (state = initialState, action) => {
    if (action.resource !== resource) return state;
    return combineReducers({
      error,
      data,
      loading,
    })(state, action);
  }
);

