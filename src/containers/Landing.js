import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageTransition from '../components/Layout/PageTransition';
import StepOne from '../components/Landing/StepOne';
import StepTwo from '../components/Landing/StepTwo';
import { registerUser } from '../redux/session';
import { fetch } from '../redux/fetch';
import { REGIONS } from '../helpers/constants';
import { getValues } from '../redux/forms';

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
    if (this.props.regions === []) {
      this.props.dispatch(fetch(REGIONS));
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
      const fields = Object.assign({}, this.props.fields, values);
      this.props.dispatch(registerUser(fields));
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
          submitError={this.props.submitError}
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
  submitError: state.session.error,
  delay: state.delay,
  regions: state.resources.regions.data,
  fields: getValues(state.forms.registerFormOne),
}))(Landing);
