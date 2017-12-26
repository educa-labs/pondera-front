import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Motion, spring } from 'react-motion';
const HideCard = ({ hidden, children }) => {
  const style = {
    x: spring(hidden ? 50 : -10),
    y: spring(hidden ? -50 : 10),
  };
  return (
    <Motion style={style}>
      {({ x, y }) => (
        <Row>
          <Col
            style={{
              transform: `translateX(${x}%)`,
              position: 'relative',
              zIndex: 1,
            }}
            xs={12}
            sm={6}
            //lg={4}
            //lg-offset={2}
            xl={3}
            xl-offset={3}
          >
            {children[0]}
          </Col>
          <Col
            style={{ transform: `translateX(${y}%)` }}
            xs={12}
            sm={6}
            //lg={4}
            xl={3}
          >
            {children[1]}
          </Col>
        </Row>
      )}
    </Motion>
  );
};

export default HideCard;
