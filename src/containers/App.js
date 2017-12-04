import React from 'react';
import PropTypes from 'prop-types';
import is from 'is_js';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { loadUserToken } from '../redux/session';
import ProtectedRoute from '../hoc/ProtectedRoute';
import Landing from './Landing';
import Simula from './Simula';
import Login from './Login';
import Terms from '../components/Terms/Terms';
import Ready from '../components/Terms/Ready';
import Contacto from '../components/Terms/Contacto';
import Support from '../components/Terms/Support';
import Background from '../components/Layout/BackGround';


class App extends React.Component {
  componentDidMount() {
    if (is.null(this.props.token)) {
      this.props.dispatch(loadUserToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.delay !== this.props.delay) {
      if (!nextProps.delay && nextProps.token) {
        nextProps.history.replace('/simula');
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.delay !== nextProps.delay) {
      return false;
    }
    return true;
  }

  render() {
    const { token, storageLoading } = this.props;
    if (storageLoading) return <div>Loading ...</div>;
    return (
      <div>
        <Background />
        <Switch>
          <ProtectedRoute isAuthenticated={is.not.null(token)} path="/simula"component={Simula} />
          <Route path="/login" component={Login} />
          <Route path="/terms" component={Terms} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/ready" component={Ready} />
          <Route path="/support" component={Support} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

const connectedApp = connect(state => ({
  token: state.session.token,
  storageLoading: state.session.storageLoading,
  delay: state.delay,
}))(App);

App.propTypes = {
  token: PropTypes.string,
  delay: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  storageLoading: PropTypes.bool.isRequired,
};

App.defaultProps = {
  token: null,
};

// export default App;
export default withRouter(connectedApp);
