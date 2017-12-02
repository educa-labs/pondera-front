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
import { logoutUser } from '../redux/session';
import { resetField, getValues } from '../redux/forms';
import { isLoading, fetch } from '../redux/fetch';
import { calculatePonderation } from '../redux/results';
import { getSimilarCareers } from '../redux/similar';
import { UNIVERSITIES, CAREERS } from '../helpers/constants';


class Simula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
    };
    this.setScreen = this.setScreen.bind(this);
    this.onUnivChange = this.onUnivChange.bind(this);
    this.onSimilarClick = this.onSimilarClick.bind(this);
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
    if (nextProps.calculating !== this.props.calculating) {
      if (!nextProps.calculating) {
        this.setScreen(1);
      }
    }
    if (nextProps.resultName !== this.props.resultName) {
      this.setScreen(0);
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


  onSimilarClick(cId) {
    const { fields, dispatch, token } = this.props;
    const values = Object.assign({}, getValues(fields), {
      cId,
    });
    dispatch(calculatePonderation(values, token));
  }

  setScreen(index) {
    this.setState({ currentScreen: index });
  }

  render() {
    const {
      result, resultName, dispatch, token,
    } = this.props;
    const pondera = (
      <PonderaForm
        onSubmit={(values) => {
          dispatch(calculatePonderation(values, token));
          dispatch(getSimilarCareers(values.cId));
        }}
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
        this.handleSubmit(values);
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
          <NavigationBar pondera desk logOut={this.handleLogOut} />
          <PonderaDesk
            index={this.state.currentScreen}
            result={result}
            resultName={resultName}
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

