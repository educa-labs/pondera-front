import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScrollScreen from '../components/Layout/ScrollScreen';
import Pondera from '../components/Pondera/Pondera';
import Result from './Result';
import { logOut } from '../redux/session';
import { logChange } from '../redux/forms';
import { isLoading, fetch } from '../redux/fetch';
import { UNIVERSITIES, CAREERS, HISTORY, SCIENCE } from '../helpers/constants';

class Simula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
      selectedTest: HISTORY,
    };
    this.setScreen = this.setScreen.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUnivChange = this.onUnivChange.bind(this);
    this.onSelectTest = this.onSelectTest.bind(this);
  }

  componentDidMount() {
    if (this.props.univs === null) {
      this.props.fetch(UNIVERSITIES);
    }
  }

  onUnivChange(ev) {
    this.props.fetch(CAREERS, ev.target.value);
  }

  onSelectTest(ev) {
    const selectedTest = ev.target.id;
    const other = selectedTest === HISTORY ? 'science' : 'history';
    this.setState({ selectedTest: ev.target.id });
    this.props.logChange('ponderaForm', other, '');
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
          univs={this.props.univs}
          careers={this.props.careers || []}
          isLoading={this.props.isLoading}
          onUnivChange={this.onUnivChange}
          onSelectTest={this.onSelectTest}
          selectedTest={this.state.selectedTest}
        />
        <Result goBack={() => this.setScreen(0)} />
      </ScrollScreen>
    );
  }
}

Simula.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default connect(state => ({
  univs: state.resources.univs.data,
  careers: state.resources.careers.data,
  isLoading: isLoading(state),
}), {
  logOut,
  fetch,
  logChange,
})(Simula);

