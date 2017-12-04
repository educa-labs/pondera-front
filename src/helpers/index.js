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
