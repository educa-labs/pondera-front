import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


function wrapCard(Component) {
  const Card = ({ style, ...props }) => (
    <Container fluid style={style}>
      <Row>
        <Col xs={12} sm={6} sm-offset={3} lg={4} lg-offset={4}>
          <Panel>
            <Component {...props} />
          </Panel>
        </Col>
      </Row>
    </Container>
  );
  return Card;
}

export default wrapCard;

