import React, { Component } from 'react';
import OverlayScreen from '../components/Layout/OverlayScreen';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Results from './Results';

class Simula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  }

  goBack() {
    this.setState(prevState => ({
      currentScreen: prevState.currentScreen - 1,
    }));
  }
  render() {
    return ([
      <OverlayScreen
        key="0"
        active={this.state.active}
        onRequestClose={this.toggleActive}
      >
        <Results goBack={this.toggleActive} />
      </OverlayScreen>,
      <div key="1" className="page">
        <NavigationBar />
        <div className="orange-banner" />
        <div className="page-content">
          Acá va el formulario
          <button onClick={this.toggleActive}>Bajar</button>
        </div>
      </div>,
    ]);
  }
}

export default Simula;

