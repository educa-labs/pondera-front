import React from 'react';
import Button from 'muicss/lib/react/button';

const ResultFooter = ({ onClick }) => (
  <div className="result-footer">
    <button className="icon-button" onClick={onClick}>
      <i className="material-icons">expand_less</i>
    </button>
    <div>Sube para calcular nuevamente</div>
  </div>
);

export default ResultFooter;
