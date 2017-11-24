import React from 'react';
import Spinner from '../Other/Spinner';

const ResultFooter = ({ onClick, calculating }) => (
  <div className="result-footer">
    {calculating ? <Spinner /> : (
      <div className="footer">
        <button className="icon-button" onClick={onClick}>
          <i className="material-icons">expand_less</i>
        </button>
        <div>Sube para calcular nuevamente</div>
      </div>
    )}
  </div>
);

export default ResultFooter;
