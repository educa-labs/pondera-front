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
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };
    this.onSubmitFailureOne = this.onSubmitFailureOne.bind(this);
    this.onSubmitSuccessOne = this.onSubmitSuccessOne.bind(this);
    this.onSubmitTwo = this.onSubmitTwo.bind(this);
  }

  componentDidMount() {
    if (this.props.isLogged) {
      this.props.history.replace('/simula');
    }
    if (this.props.regions === null) {
      this.props.fetch(REGIONS);
    }
  }

  onSubmitSuccessOne() {
    this.setState({ completed: true });
    this.props.history.push('/two');
  }

  onSubmitFailureOne() {
    this.setState({ completed: false });
  }

  onSubmitTwo(values) {
    if (this.state.completed) {
      this.props.logUser(values.email, values.password);
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
        <StepOne
          onSubmit={this.onSubmitSuccessOne}
          onSubmitError={this.onSubmitFailureOne}
        />
        <StepTwo
          onSubmit={this.onSubmitTwo}
          isLogged={this.props.isLogged}
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
