import React from 'react';

const Background = ({ landing }) => (
  <div className={`orange-banner ${landing ? 'orange-banner-big' : ''}`} />
);

export default Background;
