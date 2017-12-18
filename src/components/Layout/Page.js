import React from 'react';
import Background from './BackGround';

const Page = props => (
  <div className={`page ${props.padding ? 'page-paddingTop' : ''}`}>
    <Background landing={props.landing} />
    <div className={`page-content ${props.landing ? 'page-content-landing' : ''}`}>
      {props.children}
    </div>
  </div>
);

export default Page;
