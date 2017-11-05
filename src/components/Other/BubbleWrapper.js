import React from 'react';
import Bubble from './Bubble';

const BubbleWrapper = ({ trigger, children }) => (
  <div className="bubble-wrapper">
    <Bubble show={!trigger} />
    {children}
  </div>
);

export default BubbleWrapper;

