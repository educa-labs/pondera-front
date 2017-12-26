import axios from 'axios';
import { REGIONS, UNIVERSITIES, CAREERS } from '../helpers/constants';
import { formatRutBack } from '../helpers';

let baseURL = 'https://testapi.pondera.cl/api/v1';
// if (process.env.NODE_ENV === 'production') {
//   baseURL = 'https://api.pondera.cl/api/v1';
// }

const request = axios.create({
  baseURL,
  // withCredentials: true,
  responseType: 'json',
  timeout: 2000,
});

export const requestPassword = mail => (
  request.get('/users/lostpassword', {
    params: {
      mail,
    },
  })
);

export const createUser = (data) => {
  const finalData = Object.assign({}, data, {
    rut: formatRutBack(data.rut),
  });
  return request.post('/users', finalData);
};

export const createSession = data => (
  request.post('/session', data)
);

export const getResource = (resource, options = {}) => {
  switch (resource) {
    case REGIONS:
      return request.get('/regions');
    case UNIVERSITIES:
      return request.get('/tuni/universities', {
        headers: {
          Authorization: options.token,
        },
      });
    case CAREERS:
      return request.get(`/tuni/universities/${options.id}/careers`, {
        headers: {
          Authorization: options.token,
        },
      });
    default:
      return null;
  }
};

export const requestPonderation = (data, token) => (
  request({
    url: '/ponderar',
    method: 'post',
    headers: {
      Authorization: token,
    },
    data,
  })
);

export const requestSimilarCareers = (cId, token) => (
  request.get(`/ponderar/similar/${cId}`, {
    headers: {
      Authorization: token,
    },
  })
);

