import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

/* Prevents user to acces a route if she is not authenticated */
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location },
          }}
        />
      )
    )}
  />
);


PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
