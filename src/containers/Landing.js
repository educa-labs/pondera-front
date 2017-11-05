import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTransition from '../components/Layout/PageTransition';
import StepOne from '../components/Landing/StepOne';
import StepTwo from '../components/Landing/StepTwo';
import { logUser, isLogged } from '../redux/session';

class Landing extends React.Component {
  componentDidMount() {
    if (this.props.isLogged) {
      this.props.history.replace('/simula');
    }
  }

  render() {
    const { isLogged, logUser, delay } = this.props;
    const currentPage = this.props.location.pathname;
    return (
      <PageTransition
        currentPage={currentPage}
        pathOne="/one"
        pathTwo="/two"
        defaultPath="/"
        isLogged={isLogged}
        delay={delay}
      >
        <StepOne />
        <StepTwo
          isLogged={isLogged}
          registerUser={logUser}
        />
      </PageTransition>
    );
  }
}

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
