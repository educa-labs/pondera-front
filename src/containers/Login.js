import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from '../components/Layout/Page';
import LoginForm from '../components/Login/LoginForm';
import { logUser, isLogged } from '../redux/session';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogged !== this.props.isLogged) {
      if (nextProps.isLogged) {
        nextProps.history.push('/simula');
      }
    }
  }

  handleSubmit(values) {
    console.log(values);
    const { email, password } = values;
    this.props.logUser(email, password);
  }

  render() {
    return (
      <Page>
        <LoginForm
          onSubmit={this.handleSubmit}
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
