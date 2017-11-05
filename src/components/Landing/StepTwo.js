import React from 'react';
import PropTypes from 'prop-types';
import RegisterFormTwo from './RegisterFormTwo';
import Page from '../Layout/Page';
import NavigationBar from '../NavigationBar/NavigationBar';

class StepTwo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
    this.props.registerUser(values.email, values.password);
  }

  render() {
    const { history, isLogged } = this.props;
    return (
      <Page>
        <NavigationBar back onBackClick={() => history.goBack()} />
        <RegisterFormTwo
          onSubmit={this.handleSubmit}
          triggerAnimation={isLogged}
        />
      </Page>
    );
  }
}


StepTwo.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default StepTwo;
