import React from 'react';
import RegisterFormTwo from '../components/Landing/RegisterFormTwo';

const StepTwo = (props) => {
  function handleSubmit(values) {
    props.history.push('/simula');
  }
  return (
    <div className="page">
      <div className="orange-banner" />
      <div className="page-content">
        <RegisterFormTwo
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default StepTwo;
