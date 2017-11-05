import React from 'react';
import RegisterFormTwo from './RegisterFormTwo';
import Page from '../Layout/Page';
import NavigationBar from '../NavigationBar/NavigationBar';

const StepTwo = (props) => {
  function handleSubmit(values) {
    props.history.push('/simula');
  }
  return (
    <Page>
      <NavigationBar back onBackClick={() => props.history.goBack()} />
      <RegisterFormTwo onSubmit={handleSubmit} />
    </Page>
  );
};

export default StepTwo;
