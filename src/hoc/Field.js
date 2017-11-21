import React from 'react';

const Field = ({ children, value, onChange }) => (
  React.cloneElement(children, {
    onBlur: () => console.log('Hola'),
    value,
    onChange,
  })
);

export default Field;
