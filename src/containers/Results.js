import React from 'react';

const Results = ({ goBack }) => (
  <div className="page mui--bg-accent">
    Acá van los resultados
    <button onClick={goBack}>Subir</button>
  </div>
);

export default Results;
