import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const Pondera = ({ goNext }) => (
  <div className="page">
    <NavigationBar />
    <div className="orange-banner" />
    <div className="page-content">
      Acá va el formulario
      <button onClick={goNext}>Bajar</button>
    </div>
  </div>
);

export default Pondera;
