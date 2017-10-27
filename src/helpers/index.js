import is from 'is_js';

export const emptyValidator = (value) => {
  if (is.empty(value)) return 'Campo requerido';
  return null;
};

export const scoreValidator = (value) => {
  if (is.empty(value)) return 'Campo requerido';
  if (Number(value) <= 250 || Number(value) >= 850) return 'Puntaje inválido';
  return null;
};

