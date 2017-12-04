export const emptyValidator = value => new Promise((resolve, reject) => {
  if (value === '') {
    reject(new Error('Campo requerido'));
  }
  resolve();
});

export const nameValidator = (value) => {
  if (value === '') return Promise.reject(new Error('Ingresa tu nombre y apellido'));
  if (value.trim().split(' ').length < 2) {
    return Promise.reject(new Error('Ingresa tu nombre y apellido'));
  }
  return Promise.resolve();
};

export const scoreValidator = value => new Promise((resolve, reject) => {
  if (value === '') reject(new Error('Corregir'));
  if (Number(value) < 150 || Number(value) > 850) {
    reject(new Error('Corregir'));
  }
  resolve();
});

export const phoneValidator = (value) => {
  const match = value.match(/^(\+56)?(9\d{8})/);
  if (match) return Promise.resolve();
  return Promise.reject(new Error('Ingresa un número válido, ej, 948454110'));
};


export const formatPhone = (value) => {
  const match = value.match(/^(\+56)?(9\d{8})/);
  return `+56${match[2]}`;
};
