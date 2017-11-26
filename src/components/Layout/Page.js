import React from 'react';

const Page = props => (
  <div className={`page ${props.padding ? 'page-paddingTop' : ''}`}>
    <div style={{ height: '100%' }}>
      {props.children}
    </div>
  </div>
);

export default Page;
