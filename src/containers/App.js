import React from 'react';
import PropTypes from 'prop-types';
import is from 'is_js';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { loadUserToken } from '../redux/session';
import Landing from './Landing';
import Simula from './Simula';
import Login from './Login';
import Terms from '../components/Terms/Terms';
import Ready from '../components/Terms/Ready';
import Contacto from '../components/Terms/Contacto';
import Background from '../components/Layout/BackGround';


class App extends React.Component {
  componentDidMount() {
    if (is.null(this.props.token)) {
      console.log('Hola');
      this.props.dispatch(loadUserToken());
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.token !== nextProps.token) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <Background />
        <Switch>
          <Route path="/simula"component={Simula} />
          <Route path="/login" component={Login} />
          <Route path="/terms" component={Terms} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/ready" component={Ready} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

const connectedApp = connect(state => ({
  token: state.session.token,
}))(App);

App.propTypes = {
  token: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

App.defaultProps = {
  token: null,
};

// export default App;
export default withRouter(connectedApp);
