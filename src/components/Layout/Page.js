import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

const Page = props => (
  <div className="page">
    <NavigationBar key="0" />
    <div className={`orange-banner ${props.largeBanner ? 'orange-banner--large' : ''}`} />
    <div className="page-content">
      {props.children}
    </div>
  </div>
);

export default Page;
