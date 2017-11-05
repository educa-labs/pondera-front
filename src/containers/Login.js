import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from '../components/Layout/Page';
import LoginForm from '../components/Login/LoginForm';
import { logUser, isLogged } from '../redux/session';
import NavigationBar from '../components/NavigationBar/NavigationBar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
    const { email, password } = values;
    this.props.logUser(email, password);
  }

  render() {
    const { history, isLogged } = this.props;
    return (
      <Page>
        <NavigationBar back onBackClick={() => history.goBack()} />
        <LoginForm
          onSubmit={this.handleSubmit}
          triggerAnimation={isLogged}
        />
      </Page>
    );
  }
}

Login.propTypes = {
  logUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default connect(state => ({
  isLogged: isLogged(state),
}), {
  logUser,
})(Login);
