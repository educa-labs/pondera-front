import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const subjects = [
  { value: 'nem', label: 'NEM' },
  { value: 'ranking', label: 'Rank' },
  { value: 'language', label: 'Lang' },
  { value: 'math', label: 'Mate' },
  { value: 'history', label: 'Hist' },
];

const ResultWeights = ({ result }) => {
  const renderWeight = ({ value, label }) => (
    <div className="result-item">
      <div className="result-item-label">{label}</div>
      <div className="result-item-value">{result[value]}%</div>
    </div>
  );
  return (
    <Container className="mui--z1 result-weights">
      {subjects.map(renderWeight)}
    </Container>
  );
};

export default ResultWeights;
