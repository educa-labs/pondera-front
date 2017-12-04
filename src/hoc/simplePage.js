import React from 'react';
import Page from '../components/Layout/Page';
import wrapCard from './wrapCard';
import alignCenter from './alignCenter';
import NavigationBar from '../components/NavigationBar/NavigationBar';

export default Content => ({ history, ...props }) => {
  const Card = alignCenter(wrapCard(Content));
  return ([
    <NavigationBar key="0" back onBackClick={history.goBack} />,
    <Page key="1">
      <Card {...props} />
    </Page>,
  ]);
};
