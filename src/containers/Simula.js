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
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  goNext() {
    this.setState(prevState => ({
      currentScreen: prevState.currentScreen + 1,
    }));
  }

  goBack() {
    this.setState(prevState => ({
      currentScreen: prevState.currentScreen - 1,
    }));
  }
  render() {
    return (
      <ScrollScreen
        index={this.state.currentScreen}
        goBack={this.goBack}
      >
        <Pondera goNext={this.goNext} />
        <Result goBack={this.goBack} />
      </ScrollScreen>
    );
  }
}

export default Simula;

