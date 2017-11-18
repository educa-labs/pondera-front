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
          { id: 1, title: 'LS' },
        ],
      });
    });
  })
);

export default {
  postSession,
  fetch,
};

