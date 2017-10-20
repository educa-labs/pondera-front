import React from 'react';
import { connect } from 'react-redux';
import RegisterFormTwo from '../components/Landing/RegisterFormTwo';
import { setFormValues } from '../reducers/register';

const StepTwo = () => (
  <div className="page">
    <div className="orange-banner" />
    <div className="page-content">
      <RegisterFormTwo />
    </div>
  </div>
);

export default StepTwo;
