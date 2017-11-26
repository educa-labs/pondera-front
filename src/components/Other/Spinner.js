import React from 'react';

const Spinner = ({ white }) => (
  <div className={`spinner ${white ? 'spinner-white' : ''}`}>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </div>
);

export default Spinner;
