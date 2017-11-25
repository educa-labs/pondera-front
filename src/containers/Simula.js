import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import ScrollScreen from '../components/Layout/ScrollScreen';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PonderaDesk from '../components/Pondera/PonderaDesk';
import PonderaMobile from '../components/Pondera/PonderaMobile';
import PonderaForm from '../components/Pondera/PonderaForm';
import Page from '../components/Layout/Page';
import Result from '../components/Result/Result';
import ResultHeader from '../components/Result/ResultHeader';
import ResultWeights from '../components/Result/ResultWeights';
import ResultBody from '../components/Result/ResultBody';
import ResultFooter from '../components/Result/ResultFooter';
import { logOut } from '../redux/session';
import { setFieldValue, getValues } from '../redux/forms';
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
    this.onSimilarClick = this.onSimilarClick.bind(this);
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


  onSimilarClick(cId) {
    const { fields, dispatch } = this.props;
    const values = Object.assign({}, getValues(fields), {
      cId,
    });
    dispatch(calculatePonderation(values));
  }

  setHistoryRef(el) {
    if (el) {
      this.historyEl = el;
    }
  }

  setScreen(index) {
    this.setState({ currentScreen: index });
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
    const pondera = (
      <PonderaForm
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
    );
    const DeskForm = React.cloneElement(pondera, {
      desk: true,
      onSubmit: (values) => {
        this.setScreen(0);
        this.handleSubmit(values);
      },
    });
    
    const { result } = this.props;
    return ([
      <MediaQuery key="0" maxDeviceWidth={1224}>
        <ScrollScreen index={this.state.currentScreen}>
          <Page>
            <NavigationBar pondera logOut={logOut} />
            <PonderaMobile>
              {pondera}
            </PonderaMobile>
          </Page>
          <Page>
            <Result>
              <ResultHeader result={result} />
              <ResultWeights result={result} />
              <ResultBody result={result} onSimilarClick={this.onSimilarClick} />
              <ResultFooter
                onClick={() => this.setScreen(0)}
                calculating={this.props.calculating}
              />
            </Result>
          </Page>
        </ScrollScreen>
      </MediaQuery>,
      <MediaQuery key="1" minDeviceWidth={1224}>
        <Page>
          <NavigationBar pondera desk logOut={logOut} />
          <PonderaDesk
            index={this.state.currentScreen}
            result={result}
            onSimilarClick={() => {
              this.setScreen(0);
              this.onSimilarClick();
            }}
            calculating={this.props.calculating}
          >
            {DeskForm}
          </PonderaDesk>
        </Page>
      </MediaQuery>,
    ]);
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
  fields: state.forms.ponderaForm,
  result: state.results.result,
}))(Simula);

