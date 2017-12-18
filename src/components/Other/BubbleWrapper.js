import React from 'react';
import MediaQuery from 'react-responsive';
import Bubble from './Bubble';

const BubbleWrapper = ({ trigger, children }) => ([
  <MediaQuery key="0" maxDeviceWidth={1224}>
    <div className="bubble-wrapper">
      <Bubble show={!trigger} />
      {children}
    </div>
  </MediaQuery>,
  <MediaQuery key="1" minDeviceWidth={1224}>
    {children}
  </MediaQuery>,
]);

export default BubbleWrapper;

