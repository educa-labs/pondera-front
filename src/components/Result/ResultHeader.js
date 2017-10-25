import React from 'react';
import Container from 'muicss/lib/react/container';

const ResultHeader = ({ title }) => (
  <Container className="result-header">
    { title }
  </Container>
);

export default ResultHeader;
