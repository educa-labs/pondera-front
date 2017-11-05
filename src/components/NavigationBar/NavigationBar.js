import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logo-pondera.svg';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';


const NavigationBar = (props) => {
  // const back = arrowBackRoutes.includes(location.pathname);
  // const none = displayNone.includes(location.pathname);
  // if (none) return null;
  return (
    <nav>
      <section className="nav-left">
        {props.back ? (
          <button className="icon-button" onClick={props.onBackClick}>
            <i className="material-icons">arrow_back</i>
          </button>
        ) : <Logo width={80} height={35} />}
        
      </section>
      {props.pondera ? (
        <section className="nav-right">
          <Menu>
            <MenuItem><Link to="/bases">Bases</Link></MenuItem>
            <MenuItem><Link to="/contacto">Contacto</Link></MenuItem>
            <MenuItem>
              <a onClick={props.logOut}>Cerrar sesión</a>
            </MenuItem>
          </Menu>
        </section>
      ) : null}
    </nav>
  );
}

export default NavigationBar;
