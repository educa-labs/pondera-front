import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTransition from '../components/Layout/PageTransition';
import StepOne from '../components/Landing/StepOne';
import StepTwo from '../components/Landing/StepTwo';
import { logUser, isLogged } from '../redux/session';
import { isLoading, fetch } from '../redux/fetch';
import { REGIONS } from '../helpers/constants';

class Landing extends React.Component {
  componentDidMount() {
    if (this.props.isLogged) {
      this.props.history.replace('/simula');
    }
    if (this.props.regions === null) {
      this.props.fetch(REGIONS);
    }
  }

  render() {
    const currentPage = this.props.location.pathname;
    return (
      <PageTransition
        currentPage={currentPage}
        pathOne="/one"
        pathTwo="/two"
        defaultPath="/"
        isLogged={this.props.isLogged}
        delay={this.props.delay}
      >
        <StepOne />
        <StepTwo
          isLogged={this.props.isLogged}
          registerUser={this.props.logUser}
          regions={this.props.regions}
        />
      </PageTransition>
    );
  }
}

Landing.propTypes = {
  logUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  delay: PropTypes.bool.isRequired,
};


export default connect(state => ({
  isLogged: isLogged(state),
  isLoading: isLoading(state),
  delay: state.delayAnimation,
  regions: state.resources.regions.data,
}), {
  logUser,
  fetch,
})(Landing);
