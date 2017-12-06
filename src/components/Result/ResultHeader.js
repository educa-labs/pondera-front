import React from 'react';
import Container from 'muicss/lib/react/container';

const ResultHeader = ({ title }) => (
  title ? (
    <Container style={{ padding: 0 }}>
      <div className="result-header">
        {title}
      </div>
    </Container>
  ) : null
);

export default ResultHeader;
