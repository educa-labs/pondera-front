export const emptyValidator = value => new Promise((resolve, reject) => {
  if (value === '') {
    reject(new Error('Campo requerido'));
  }
  resolve();
});

export const scoreValidator = value => new Promise((resolve, reject) => {
  if (value === '') reject(new Error('Corregir'));
  if (Number(value) <= 250 || Number(value) >= 850) {
    reject(new Error('Corregir'));
  }
  resolve();
});
