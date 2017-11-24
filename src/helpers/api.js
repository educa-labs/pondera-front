export const postSession = (email, password) => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email,
        name: 'Iván',
      });
    }, 500);
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

export const requestPonderation = values => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        similar: [
          { id: 1, title: 'Derecho' },
          { id: 2, title: 'Ingenieria PUC' },
          { id: 2, title: 'Ingenieria UCH' },
        ],
        score: 655,
        cut: 444,
        weights: {
          language: 20,
          math: 20,
          history: 10,
          nem: 25,
          ranking: 25,
        },
      });
    }, 2000);
  })
);


