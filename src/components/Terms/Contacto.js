import React from 'react';
import Page from '../Layout/Page';
import NavigationBar from '../NavigationBar/NavigationBar';
import wrapCard from '../../hoc/wrapCard';

const Contacto = () => {
  const content = () => (
    <legend>
      Acerca de Educalabs
    </legend>
  );
  const Card = wrapCard(content);
  return ([
    <NavigationBar key="0" back />,
    <Page key="1">
      <Card />
    </Page>,
  ]);
};

export default Contacto;
