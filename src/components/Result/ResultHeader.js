import React from 'react';
import Container from 'muicss/lib/react/container';

const ResultHeader = ({ result }) => (
  <Container className="result-header">
    { result.title }
  </Container>
);

export default ResultHeader;
