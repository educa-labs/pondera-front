import React from 'react';
import Spinner from '../Other/Spinner';

const ResultFooter = ({ onClick, calculating, desk }) => {
  const footer = desk ? <div className="empty" /> : (
    <div className="footer">
      <button className="icon-button" onClick={onClick}>
        <i className="material-icons">expand_less</i>
      </button>
      <div>Sube para calcular nuevamente</div>
    </div>
  );
  return (
    <div className="result-footer">
      {calculating ? <Spinner /> : footer}
    </div>
  );
};

export default ResultFooter;
