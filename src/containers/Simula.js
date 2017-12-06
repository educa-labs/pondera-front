import React, { Component } from 'react';
import is from 'is_js';
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
import { logoutUser } from '../redux/session';
import { resetField, getValues, setFieldValue } from '../redux/forms';
import { isLoading, fetch } from '../redux/fetch';
import { calculatePonderation } from '../redux/results';
import { getSimilarCareers } from '../redux/similar';
import { UNIVERSITIES, CAREERS } from '../helpers/constants';


class Simula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
      title: '',
    };
    this.setScreen = this.setScreen.bind(this);
    this.onUnivChange = this.onUnivChange.bind(this);
    this.onSimilarClick = this.onSimilarClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { token, univs } = this.props;
    if (is.empty(univs)) {
      this.props.dispatch(fetch(UNIVERSITIES, {
        token,
      }));
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.careers !== this.props.careers) {
      const {
        careers, univs, cId, uId,
      } = nextProps;
      const career = careers.filter(car => car.id === cId.toString())[0];
      const univ = univs.filter(uni => uni.id === uId.toString())[0];

      if (is.existy(career)) {
        this.setState({ title: `${career.title} en ${univ.title}` });
      }
    }
    if (nextProps.cId !== this.props.cId) {
      const {
        careers, univs, cId, uId,
      } = nextProps;

      const univ = univs.filter(uni => uni.id === uId)[0];
      const career = careers.filter(car => car.id === cId)[0];

      this.setScreen(0);
      if (is.all.existy(career, univ)) {
        this.setState({ title: `${career.title} en ${univ.title}` });
      }
    }
    if (nextProps.calculating !== this.props.calculating) {
      if (!nextProps.calculating) {
        this.setScreen(1);
      }
    }
  }

  onUnivChange(id) {
    const { token } = this.props;
    this.props.dispatch(fetch(CAREERS, {
      id,
      token,
    }));
    this.props.dispatch(resetField('ponderaForm')('cId'));
  }


  onSimilarClick(cId, uId) {
    const { values, dispatch, token } = this.props;
    const finalValues = Object.assign({}, values, {
      cId,
      uId,
    });
    dispatch(calculatePonderation(finalValues, token));
    dispatch(fetch(CAREERS, { id: uId, token }));
    dispatch(setFieldValue('ponderaForm')('cId', cId));
    dispatch(setFieldValue('ponderaForm')('uId', uId));
  }

  setScreen(index) {
    if (this.state.currentScreen !== index) {
      this.setState({ currentScreen: index });
    }
  }

  handleSubmit(values) {
    const {
      careers, univs, cId, uId, dispatch, token,
    } = this.props;
    dispatch(calculatePonderation(values, token));
    dispatch(getSimilarCareers(values.cId));
  }

  render() {
    const {
      result, dispatch, token, similar, similarLoading, univs, careers,
    } = this.props;
    const pondera = (
      <PonderaForm
        onSubmit={this.handleSubmit}
        univs={this.props.univs}
        careers={this.props.careers}
        isLoading={this.props.isLoading}
        calculating={this.props.calculating}
        onUnivChange={this.onUnivChange}
        dispatch={dispatch}
      />
    );
    const DeskForm = React.cloneElement(pondera, {
      desk: true,
      onSubmit: (values) => {
        this.setScreen(0);
        dispatch(calculatePonderation(values, token));
        dispatch(getSimilarCareers(values.cId));
      },
    });
    
    return ([
      <MediaQuery key="0" maxDeviceWidth={1224}>
        <ScrollScreen
          index={this.state.currentScreen}
          goBack={() => this.setScreen(0)}
        >
          <Page>
            <NavigationBar pondera logOut={() => dispatch(logoutUser())} />
            <PonderaMobile>
              {pondera}
            </PonderaMobile>
          </Page>
          <Page>
            <Result>
              <ResultHeader title={this.state.title} />
              <ResultWeights result={result} />
              <ResultBody
                result={result}
                similar={similar}
                loading={similarLoading}
                onSimilarClick={this.onSimilarClick}
              />
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
          <NavigationBar pondera desk logOut={this.handleLogOut} />
          <PonderaDesk
            index={this.state.currentScreen}
            result={result}
            resultName={this.state.title}
            similar={similar}
            onSimilarClick={(cId, uId) => {
              this.setScreen(0);
              this.onSimilarClick(cId, uId);
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
  careers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  fields: PropTypes.shape({
    NEM: PropTypes.string.isRequired,
    ranking: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    math: PropTypes.string.isRequired,
    science: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired,
    cId: PropTypes.string.isRequired,
    uId: PropTypes.string.isRequired,
  }).isRequired,
  result: PropTypes.shape({
    cut: PropTypes.number.isRequired,
    diff: PropTypes.number.isRequired,
    pond: PropTypes.number.isRequired,
    weights: PropTypes.shape({
      NEM: PropTypes.number.isRequired,
      ranking: PropTypes.number.isRequired,
      math: PropTypes.number.isRequired,
      language: PropTypes.number.isRequired,
      history: PropTypes.number,
      science: PropTypes.number,
    }),
  }).isRequired,
};


export default connect(state => ({
  univs: state.resources.univs.data,
  careers: state.resources.careers.data,
  token: state.session.token,
  isLoading: isLoading(state),
  calculating: state.results.loading,
  values: getValues(state.forms.ponderaForm),
  result: state.results.result,
  similar: state.similar.similar,
  similarLoading: state.similar.loading,
  cId: state.forms.ponderaForm.cId.value,
  uId: state.forms.ponderaForm.uId.value,
}))(Simula);

