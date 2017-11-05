import React from 'react';

const Page = props => (
  <div className={`page ${props.padding ? 'page-paddingTop' : ''}`}>
    <div>
      {props.children}
    </div>
  </div>
);

export default Page;
