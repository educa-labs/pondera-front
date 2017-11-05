import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTransition from '../components/Layout/PageTransition';
import StepOne from '../components/Landing/StepOne';
import StepTwo from '../components/Landing/StepTwo';
import { logUser, isLogged } from '../redux/session';

const Landing = (props) => {
  const currentPage = props.location.pathname;
  return (
    <PageTransition
      currentPage={currentPage}
      pathOne="/one"
      pathTwo="/two"
      defaultPath="/"
      isLogged={props.isLogged}
      delay={props.delay}
    >
      <StepOne />
      <StepTwo
        isLogged={props.isLogged}
        registerUser={props.logUser}
      />
    </PageTransition>
  );
};

Landing.propTypes = {
  logUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};


export default connect(state => ({
  isLogged: isLogged(state),
  delay: state.delayAnimation,
}), {
  logUser,
})(Landing);
