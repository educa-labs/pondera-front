import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../assets/svg/logo-pondera.svg';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';

const NavigationBar = props => (
  <nav>
    <section className="nav-left">
      <Logo width={80} height={35} />
    </section>
    {props.pondera ? (
      <section className="nav-right">
        <Menu>
          <MenuItem onSelect={() => props.history.push('/terms')}>Bases</MenuItem>
          <MenuItem onSelect={() => props.history.push('/contacto')}>Contacto</MenuItem>
          <MenuItem onSelect={() => props.history.push('/')}>Cerrar Sesión</MenuItem>
        </Menu>
      </section>
    ) : null}
  </nav>
);

export default withRouter(NavigationBar);
