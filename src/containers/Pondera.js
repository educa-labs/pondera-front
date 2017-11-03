import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PonderaForm from '../components/Pondera/PonderaForm';
import Page from '../components/Layout/Page';

const Pondera = (props) => {
  const handleSubmit = (values) => {
    props.goNext();
  };

  return ([
    <NavigationBar key="0" pondera />,
    <Page>
      <PonderaForm onSubmit={handleSubmit}/>
    </Page>,
  ]);
};

export default Pondera;