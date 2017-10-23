import React, { Component } from 'react';
import OverlayScreen from '../components/Layout/OverlayScreen';
import ScrollScreen from '../components/Layout/ScrollScreen';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Pondera from './Pondera';
import Results from './Results';

class Simula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      currentScreen: 0,
    };
    this.toggleActive = this.toggleActive.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  toggleActive() {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
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
        <Results goBack={this.goBack} />
      </ScrollScreen>
    );
  }
}

export default Simula;

