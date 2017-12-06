import React from 'react';
import Container from 'muicss/lib/react/container';


const ResultWeights = ({ result }) => {
  if (result === null) return null;
  const subjects = [
    { value: 'NEM', label: 'NEM' },
    { value: 'ranking', label: 'Rank' },
    { value: 'language', label: 'Lang' },
    { value: 'math', label: 'Mate' },
  ];
  const { history, science } = result.weights;
  if (history > 0) {
    if (science > 0) {
      subjects.push({
        value: 'history',
        label: 'Hist/Cien',
      });
    } else {
      subjects.push({
        value: 'history',
        label: 'Hist',
      });
    }
  } else {
    subjects.push({
      value: 'science',
      label: 'Cien',
    });
  }
  const renderWeight = ({ value, label }, index) => (
    <div className="result-item" key={index}>
      <div className="result-item-label">{label}</div>
      <div className="result-item-value">{result.weights[value]}%</div>
    </div>
  );
  return (
    <Container className="mui--z1 result-weights">
      {subjects.map(renderWeight)}
    </Container>
  );
};

export default ResultWeights;
