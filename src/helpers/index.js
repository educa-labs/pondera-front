import is from 'is_js';

export const formValidator = (value) => {
  if (is.empty(value)) return 'Campo requerido';
  return null;
};