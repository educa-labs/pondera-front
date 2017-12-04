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

export const emailValidator = (value) => {
  const match = value.match(/^\w+@\w+\.(com|cl)/);
  if (match) return Promise.resolve();
  return Promise.reject(new Error('Ingresa un correo válido, ej, pepe@educalabs.com'));
};

export const lengthValidator = (min, max = 32) => (value) => {
  if (value.length < min) return Promise.reject(new Error(`Escoge una contraseña de almenos ${min} caracters`));
  else if (value.length > max) return Promise.reject(new Error(`Escoge una contraseña de a lo más ${max} caracteres`));
  return Promise.resolve();
};

export const formatPhone = (value) => {
  const match = value.match(/^(\+56)?(9\d{8})/);
  return `+56${match[2]}`;
};

export const rutValidator = (value) => {
  const match = value.match(/(\d\d?)\.?(\d{3})\.?(\d{3})-?(\d)/);
  if (match) return Promise.resolve();
  return Promise.reject(new Error('Ingresa un rut válido, ej, 189184964'));
};

export const formatRut = (value) => {
  const match = value.match(/(\d\d?)\.?(\d{3})\.?(\d{3})-?(\d)/);
  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
  }
  return value;
};
