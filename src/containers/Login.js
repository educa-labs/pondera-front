import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from '../components/Layout/Page';
import LoginForm from '../components/Login/LoginForm';
import { logUser } from '../redux/session';
import NavigationBar from '../components/NavigationBar/NavigationBar';

class Login extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.delay && !nextProps.delay) {
      this.props.history.replace('/simula');
    }
  }

  render() {
    const { delay, history, dispatch, sessionLoading } = this.props;
    return (
      <Page>
        <NavigationBar back onBackClick={history.goBack} />
        <LoginForm
          onSubmit={values => dispatch(logUser(values))}
          delay={delay}
          sessionLoading={sessionLoading}
        />
      </Page>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  delay: PropTypes.bool.isRequired,
  sessionLoading: PropTypes.bool.isRequired,
};

export default connect(state => ({
  delay: state.delay,
}))(Login);
