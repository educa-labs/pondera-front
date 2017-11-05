import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScrollScreen from '../components/Layout/ScrollScreen';
import Pondera from '../components/Pondera/Pondera';
import Result from './Result';
import { logOut } from '../redux/session';

class Simula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
    };
    this.setScreen = this.setScreen.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setScreen(index) {
    this.setState({ currentScreen: index });
  }

  handleSubmit(values) {
    this.setScreen(1);
  }

  handleLogOut() {
    this.props.logOut();
    this.props.history.replace('/');
  }

  render() {
    return (
      <ScrollScreen
        index={this.state.currentScreen}
        goBack={() => this.setScreen(0)}
      >
        <Pondera
          onSubmit={this.handleSubmit}
          logOut={this.handleLogOut}
        />
        <Result goBack={() => this.setScreen(0)} />
      </ScrollScreen>
    );
  }
}

Simula.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default connect(null, {
  logOut,
})(Simula);

