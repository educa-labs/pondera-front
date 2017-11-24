import React from 'react';
import Container from 'muicss/lib/react/container';

const subjects = [
  { value: 'nem', label: 'NEM' },
  { value: 'ranking', label: 'Rank' },
  { value: 'language', label: 'Lang' },
  { value: 'math', label: 'Mate' },
  { value: 'history', label: 'Hist' },
];

const ResultWeights = ({ weights }) => {
  const renderWeight = ({ value, label }, index) => (
    <div className="result-item" key={index}>
      <div className="result-item-label">{label}</div>
      <div className="result-item-value">{weights[value]}%</div>
    </div>
  );
  return (
    <Container className="mui--z1 result-weights">
      {subjects.map(renderWeight)}
    </Container>
  );
};

export default ResultWeights;
