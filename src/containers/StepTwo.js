import React from 'react';
import RegisterFormTwo from '../components/Landing/RegisterFormTwo';
import Page from '../components/Layout/Page';

const StepTwo = (props) => {
  function handleSubmit(values) {
    props.history.push('/simula');
  }
  return (
    <Page>
      <RegisterFormTwo onSubmit={handleSubmit} />
    </Page>
  );
};

export default StepTwo;
