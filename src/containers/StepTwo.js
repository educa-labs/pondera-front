import React from 'react';
import { connect } from 'react-redux';
import RegisterFormTwo from '../components/Landing/RegisterFormTwo';
import { setFormValues } from '../reducers/register';

const StepTwo = (props) => {
  function handleSubmit(values) {
    props.setFormValues(values);
    props.history.push('/simula');
  }
  return (
    <div className="page">
      <div className="orange-banner" />
      <div className="page-content">
        <RegisterFormTwo
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default connect(null, {
  setFormValues,
})(StepTwo);
