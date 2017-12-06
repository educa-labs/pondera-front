import { combineReducers } from 'redux';
import { requestSimilarCareers } from '../helpers/api';

const SIMILAR_REQUEST = 'SIMILAR_REQUEST';
const SIMILAR_FAILURE = 'SIMILAR_FAILURE';
const SIMILAR_SUCCESS = 'SIMILAR_SUCCESS';

const similarRequest = () => ({
  type: SIMILAR_REQUEST,
});

const similarFailure = error => ({
  type: SIMILAR_FAILURE,
  error,
});

const similarSuccess = similar => ({
  type: SIMILAR_SUCCESS,
  similar,
});

export const getSimilarCareers = (cId, token) => (
  async (dispatch) => {
    dispatch(similarRequest());
    try {
      const similar = await requestSimilarCareers(cId, token);
      dispatch(similarSuccess(similar.data.sim));
    } catch (err) {
      console.log(err);
      if (err.response) {
        dispatch(similarFailure(err.response.status));
      }
    }
  }
);

const loading = (state = false, action) => {
  switch (action.type) {
    case SIMILAR_REQUEST:
      return true;
    case SIMILAR_SUCCESS:
    case SIMILAR_FAILURE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case SIMILAR_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const similar = (state = null, action) => {
  switch (action.type) {
    case SIMILAR_SUCCESS:
      return action.similar;
    default:
      return state;
  }
};

export default combineReducers({
  similar,
  error,
  loading,
});
