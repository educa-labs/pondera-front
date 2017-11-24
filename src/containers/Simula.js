import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScrollScreen from '../components/Layout/ScrollScreen';
import Pondera from '../components/Pondera/Pondera';
import Result from './Result';
import { logOut } from '../redux/session';
import { setFieldValue } from '../redux/forms';
import { isLoading, fetch } from '../redux/fetch';
import { calculatePonderation, isCalculating } from '../redux/results';
import { UNIVERSITIES, CAREERS, HISTORY } from '../helpers/constants';

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
    this.setHistoryRef = this.setHistoryRef.bind(this);
    this.setScienceRef = this.setScienceRef.bind(this);
  }

  componentDidMount() {
    if (this.props.univs === null) {
      this.props.dispatch(fetch(UNIVERSITIES));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.calculating !== this.props.calculating) {
      if (!nextProps.calculating) {
        this.setScreen(1);
      }
    }
  }

  onUnivChange(ev) {
    this.props.dispatch(fetch(CAREERS, ev.target.value));
    this.props.dispatch(setFieldValue('ponderaForm')('career', ''));
  }

  async onSelectTest(ev) {
    const selectedTest = ev.target.id;
    let other;

    await this.setState({ selectedTest });
    if (selectedTest === HISTORY) {
      other = 'science';
      this.historyEl.controlEl.focus();
    } else {
      other = 'history';
      this.scienceEl.controlEl.focus();
    }
    this.props.dispatch(setFieldValue('ponderaForm')(other, ''));
  }

  setScreen(index) {
    this.setState({ currentScreen: index });
  }

  setHistoryRef(el) {
    if (el) {
      this.historyEl = el;
    }
  }

  setScienceRef(el) {
    if (el) {
      this.scienceEl = el;
    }
  }

  handleSubmit(values) {
    this.props.dispatch(calculatePonderation(values));
  }

  handleLogOut() {
    this.props.dispatch(logOut());
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
          calculating={this.props.calculating}
          onUnivChange={this.onUnivChange}
          onSelectTest={this.onSelectTest}
          selectedTest={this.state.selectedTest}
          setHistoryRef={this.setHistoryRef}
          setScienceRef={this.setScienceRef}
        />
        <Result goBack={() => this.setScreen(0)} />
      </ScrollScreen>
    );
  }
}

Simula.propTypes = {
  dispatch: PropTypes.func.isRequired,
  calculating: PropTypes.bool.isRequired,
};


export default connect(state => ({
  univs: state.resources.univs.data,
  careers: state.resources.careers.data,
  isLoading: isLoading(state),
  calculating: isCalculating(state),
}))(Simula);

