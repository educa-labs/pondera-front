import React from 'react';
import Page from '../components/Layout/Page';
import LoginForm from '../components/Login/LoginForm';

const Login = (props) => {
  function handleSubmit(values) {
    props.history.push('/simula');
  }
  return (
    <Page>
      <LoginForm
        onSubmit={handleSubmit}
      />
    </Page>
  );
};

export default Login;
