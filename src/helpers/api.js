export const postSession = (email, password) => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email,
        name: 'Iván',
      });
    }, 2000);
  })
);

export const getResource = (resource, ...args) => {
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            { id: 1, title: 'La Serena' },
            { id: 2, title: 'Santiago' },
          ],
        });
      }, 2000);
    })
  );
};

const resultOne = {
  title: 'Derecho en Universidad Mayor',
  similar: [
    { id: 1, title: 'Derecho' },
    { id: 2, title: 'Ingenieria PUC' },
    { id: 3, title: 'Ingenieria UCH' },
  ],
  score: 655,
  cut: 444,
  diff: 655 - 444,
  weights: {
    language: 20,
    math: 20,
    history: 10,
    nem: 25,
    ranking: 25,
  },
};

const resultTwo = {
  title: 'Medicina en Pontificia univarsidad catolica',
  similar: [
    { id: 1, title: 'Medicina UCH' },
    { id: 2, title: 'Odontologia PUC' },
    { id: 3, title: 'Enfermeria UCH' },
  ],
  score: 655,
  cut: 766,
  diff: 655 - 766,
  weights: {
    language: 20,
    math: 20,
    history: 10,
    nem: 25,
    ranking: 25,
  },
};

export const requestPonderation = values => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(values.cId ? resultOne : resultTwo);
    }, 2000);
  })
);


