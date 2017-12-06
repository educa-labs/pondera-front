import localforage from 'localforage';

export const saveToken = token => (
  localforage.setItem('token', token)
);

export const loadToken = () => (
  localforage.getItem('token')
);

export const clearStore = () => (
  localforage.clear()
);

