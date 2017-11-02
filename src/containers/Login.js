import React from 'react';
import LoginForm from '../components/Login/LoginForm';

const Login = (props) => {
  function handleSubmit(values) {
    props.history.push('/simula');
  }
  return (
    <div className="page">
      <div className="orange-banner" />
      <div className="page-content">
        <LoginForm
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
