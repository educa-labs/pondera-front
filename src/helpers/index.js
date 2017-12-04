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
  if (/9\d{8}/.test(value)) return Promise.resolve();
  return Promise.reject(new Error('Ingresa un número válido, ej, 948454110'));
};


export const formatPhone = (value) => {
  const res = value.replace(/^(\+5?6?)/, '');
  return `+569${res}`;
};
