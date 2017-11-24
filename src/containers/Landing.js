import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTransition from '../components/Layout/PageTransition';
import StepOne from '../components/Landing/StepOne';
import StepTwo from '../components/Landing/StepTwo';
import { logUser } from '../redux/session';
import { fetch } from '../redux/fetch';
import { REGIONS } from '../helpers/constants';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      currentPage: 0,
    };
    this.onSubmitFailureOne = this.onSubmitFailureOne.bind(this);
    this.onSubmitSuccessOne = this.onSubmitSuccessOne.bind(this);
    this.onSubmitTwo = this.onSubmitTwo.bind(this);
  }


  componentDidMount() {
    if (this.props.regions === null) {
      this.props.dispatch(fetch(REGIONS));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.delay && !nextProps.delay) {
      this.props.history.replace('/simula');
    }
  }

  onSubmitSuccessOne() {
    this.setState({
      completed: true,
      currentPage: 1,
    });
  }

  onSubmitFailureOne() {
    this.setState({ completed: false });
  }

  onSubmitTwo(values) {
    if (this.state.completed) {
      this.props.dispatch(logUser(values.email, values.password));
    }
  }

  render() {
    return (
      <PageTransition currentPage={this.state.currentPage}>
        <StepOne
          onSubmit={this.onSubmitSuccessOne}
          onSubmitError={this.onSubmitFailureOne}
        />
        <StepTwo
          onSubmit={this.onSubmitTwo}
          regions={this.props.regions}
          goBack={() => this.setState({ currentPage: 0 })}
          delay={this.props.delay}
          sessionLoading={this.props.sessionLoading}
        />
      </PageTransition>
    );
  }
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sessionLoading: PropTypes.bool.isRequired,
  delay: PropTypes.bool.isRequired,
};


export default connect(state => ({
  sessionLoading: state.session.loading,
  delay: state.delay,
  regions: state.resources.regions.data,
}))(Landing);
