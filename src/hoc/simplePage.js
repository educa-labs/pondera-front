import React from 'react';
import Page from '../components/Layout/Page';
import wrapCard from './wrapCard';
import alignCenter from './alignCenter';
import NavigationBar from '../components/NavigationBar/NavigationBar';


/* Wrap a componnet with simple page styles, eg. Terms, Ready */
export default Content => ({ history, ...props }) => {
  const Card = alignCenter(wrapCard(Content));
  return (
    <Page key="1">
      <NavigationBar key="0" back onBackClick={history.goBack} />
      <Card {...props} />
    </Page>
  );
};
