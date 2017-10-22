import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';

const ScrollScreen = ({ index, children }) => {
  const renderScreen = child => (
    <div className="screen">
      {child}
    </div>
  );
  return (
    <Motion style={{ y: spring(index * 100) }}>
      {({ y }) => (
        <div className="scroll-screen">
          <div style={{ transform: `translateY(-${y}vh)` }}>
            {React.Children.map(children, renderScreen)}
          </div>
        </div>
      )}
    </Motion>
  );
};

ScrollScreen.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ScrollScreen;

