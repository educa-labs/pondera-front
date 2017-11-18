const postSession = (email, password) => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email,
        name: 'Iván',
      });
    }, 500);
  })
);

const fetch = resource => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, title: 'La Serena' },
          { id: 2, title: 'Santiago' },
        ],
      });
    }, 1000);
  })
);

export default {
  postSession,
  fetch,
};

