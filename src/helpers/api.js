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
        ],
      });
    }, 1000);
  })
);

export default {
  postSession,
  fetch,
};

