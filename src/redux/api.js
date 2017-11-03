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

export default {
  postSession,
};

