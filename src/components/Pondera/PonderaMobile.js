import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const PonderaMobile = ({ children }) => (
  <Container fluid>
    <Row>
      <Col xs={12} sm={6} sm-offset={3} lg={4} lg-offset={4}>
        {React.Children.only(children)}
      </Col>
    </Row>
  </Container>
);

export default PonderaMobile;
