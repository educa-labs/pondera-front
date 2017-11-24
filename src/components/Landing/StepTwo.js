import React from 'react';
import PropTypes from 'prop-types';
import RegisterFormTwo from './RegisterFormTwo';
import Page from '../Layout/Page';
import NavigationBar from '../NavigationBar/NavigationBar';

const StepTwo = ({ goBack, ...props }) => (
  <Page>
    <NavigationBar back onBackClick={goBack} />
    <RegisterFormTwo {...props} />
  </Page>
);


StepTwo.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default StepTwo;
