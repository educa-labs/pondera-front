import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../../hoc/ProtectedRoute';


const PageTransition = ({
  currentPage,
  defaultPath,
  pathOne,
  pathTwo,
  children,
  isLogged,
  delay,
}) => (
  <div className="page-transition">
    <Transition in={currentPage === pathOne || currentPage === defaultPath} timeout={500}>
      {status => (
        <div className={`pages-wrapper fade fade-${status}`}>
          <Route
            path={pathOne}
            children={props => (
              React.cloneElement(children[0], props)
            )}
          />
          <ProtectedRoute
            path={pathTwo}
            children={props => (
              React.cloneElement(children[1], props)
            )}
            isLogged={isLogged}
            requireUser={false}
            redirectTo="/simula"
            delay={delay}
          />
        </div>
      )}
    </Transition>
  </div>
);

PageTransition.propTypes = {
  delay: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  pathOne: PropTypes.string.isRequired,
  pathTwo: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  defaultPath: PropTypes.string.isRequired,
};

export default PageTransition;
