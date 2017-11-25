import React from 'react';
import Container from 'muicss/lib/react/container';

const ResultHeader = ({ result }) => (
  result ? (
    <Container className="result-header">
      { result.title }
    </Container>
  ) : null
);

export default ResultHeader;
