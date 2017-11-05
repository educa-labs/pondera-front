import React from 'react';

const delay = func => (
  () => setTimeout(func, 200)
);

const MenuItem = ({ children, onSelect }) => (
  <li onClick={delay(onSelect)}>
    {children}
  </li>
);

export default MenuItem;
