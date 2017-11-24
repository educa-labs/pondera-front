import React from 'react';

const Page = props => (
  <div className={`page ${props.padding ? 'page-paddingTop' : ''}`}>
    {props.children}
  </div>
);

export default Page;
