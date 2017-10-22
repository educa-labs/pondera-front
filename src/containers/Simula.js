import React, { Component } from 'react';
import ScrollScreen from '../components/Layout/ScrollScreen';

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
      >
        <div className="mui--bg-primary">
          <button onClick={this.goNext}>Go down</button>
        </div>
        <div className="mui--bg-accent">
          <button onClick={this.goBack}>Go up</button>
        </div>
      </ScrollScreen>
    );
  }
}

export default Simula;

