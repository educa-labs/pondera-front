import React from 'react';

const Page = props => (
  <div className="page">
    <div className={`orange-banner ${props.largeBanner ? 'orange-banner--large' : ''}`} />
    <div className="page-content">
      {props.children}
    </div>
  </div>
);

export default Page;
