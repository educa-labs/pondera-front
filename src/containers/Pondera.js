import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PonderaForm from '../components/Pondera/PonderaForm';

const Pondera = (props) => {
  const handleSubmit = (values) => {
    props.goNext();
  };

  return (
    <div className="page">
      <NavigationBar />
      <div className="orange-banner" />
      <div className="page-content">
        <PonderaForm
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Pondera;
