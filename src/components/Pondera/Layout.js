import React from 'react';
import styled from 'styled-components';

const PonderaLayout = styled.div`
  height: 100vh;
`;

const OrangeBg = styled.div`
  height: 33rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #F57C00;
  z-index: -1;
`;

const Layout = ({ children }) => (
  <PonderaLayout>
    <OrangeBg />
    {children}
  </PonderaLayout>
);

export default Layout;


