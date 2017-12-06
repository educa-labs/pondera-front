import React from 'react';
import Container from 'muicss/lib/react/container';
import { truncateString } from '../../helpers';


const ResultHeader = ({ title }) => (
  title ? (
    <Container style={{ padding: 0, margin: 0 }}>
      <div className="result-header">
        {truncateString(title, 80)}
      </div>
    </Container>
  ) : null
);

export default ResultHeader;
