import React, { Component } from 'react';
import PropTypes from 'prop-types';
import is from 'is_js';
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
import { careerNameSelector } from '../redux';
import { logOut } from '../redux/session';
import { setFieldValue, getValues } from '../redux/forms';
import { isLoading, fetch } from '../redux/fetch';
import { calculatePonderation } from '../redux/results';
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
    if (is.null(this.props.token)) {
      this.props.history.replace('/');
    }
    if (is.empty(this.props.univs)) {
      this.props.dispatch(fetch(UNIVERSITIES, {
        token: this.props.token,
      }));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.calculating !== this.props.calculating) {
      if (!nextProps.calculating) {
        this.setScreen(1);
      }
    }
  }

  onUnivChange(id) {
    this.props.dispatch(fetch(CAREERS, {
      id,
      token: this.props.token,
    }));
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
    const { fields, dispatch, token } = this.props;
    const values = Object.assign({}, getValues(fields), {
      cId,
    });
    dispatch(calculatePonderation(values, token));
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
    const { token } = this.props;
    this.props.dispatch(calculatePonderation(values, token));
  }


  handleLogOut() {
    this.props.dispatch(logOut());
    this.props.history.replace('/');
  }

  render() {
    const pondera = (
      <PonderaForm
        onSubmit={this.handleSubmit}
        univs={this.props.univs}
        careers={this.props.careers}
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
    
    const { result, resultName } = this.props;
    return ([
      <MediaQuery key="0" maxDeviceWidth={1224}>
        <ScrollScreen index={this.state.currentScreen}>
          <Page>
            <NavigationBar pondera logOut={this.handleLogOut} />
            <PonderaMobile>
              {pondera}
            </PonderaMobile>
          </Page>
          <Page>
            <Result>
              <ResultHeader title={resultName} />
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
  token: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resultName: PropTypes.string.isRequired,
  careers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};


export default connect(state => ({
  univs: state.resources.univs.data,
  careers: state.resources.careers.data,
  token: state.session.token,
  isLoading: isLoading(state),
  calculating: state.results.loading,
  fields: state.forms.ponderaForm,
  result: state.results.result,
  resultName: careerNameSelector(state),
}))(Simula);

