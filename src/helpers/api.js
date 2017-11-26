import axios from 'axios';
import { REGIONS, UNIVERSITIES, CAREERS } from '../helpers/constants';

const request = axios.create({
  baseURL: 'https://api.pondera.cl/api/v1',
  // withCredentials: true,
  responseType: 'json',
  timeout: 2000,
});

export const createUser = data => (
  request.post('/users', data)
);

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





