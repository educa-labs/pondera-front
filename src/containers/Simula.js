import React, { Component } from 'react';
import ScrollScreen from '../components/Layout/ScrollScreen';
import Pondera from './Pondera';
import Result from './Result';

class Simula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
    };
    this.setScreen = this.setScreen.bind(this);
  }

  setScreen(index) {
    this.setState({ currentScreen: index });
  }

  render() {
    return (
      <ScrollScreen
        index={this.state.currentScreen}
        goBack={() => this.setScreen(0)}
      >
        <Pondera goNext={() => this.setScreen(1)} />
        <Result goBack={() => this.setScreen(0)} />
      </ScrollScreen>
    );
  }
}

export default Simula;

