import React from 'react';
import Container from 'muicss/lib/react/container';

const ResultHeader = ({ title }) => (
  title ? (
    <Container className="result-header">
      {title}
    </Container>
  ) : null
);

export default ResultHeader;
