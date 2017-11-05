import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const xor = (a, b) => (a && !b) || (!a && b);

const ProtectedRoute = ({
  component: Component,
  children,
  isLogged,
  requireUser,
  redirectTo,
  delay,
  ...rest,
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!delay && xor(isLogged, requireUser)) {
        return <Redirect to={redirectTo} />;
      }
      if (children) {
        return children(props);
      }
      return <Component {...props} />;
    }}
  />
);

ProtectedRoute.defaultProps = {
  delay: false,
  component: undefined,
};

ProtectedRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  requireUser: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
  delay: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]),
};

export default ProtectedRoute;
