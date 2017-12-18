import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { loadUserToken } from '../redux/session';
import ProtectedRoute from '../hoc/ProtectedRoute';
import lazyComponent from '../hoc/lazyComponent';
import Background from '../components/Layout/BackGround';
import Landing from './Landing';


const Support = lazyComponent(() => import('../components/Terms/Support'))
const Terms = lazyComponent(() => import('../components/Terms/Terms'));
const Login = lazyComponent(() => import('./Login'));
const Ready = lazyComponent(() => import('../components/Terms/Ready'));
const Contacto = lazyComponent(() => import('../components/Terms/Contacto'));
// const Simula = lazyComponent(() => import('./Simula'));


class App extends React.Component {
  componentDidMount() {
    if (this.props.token === null) {
      // this.props.dispatch(loadUserToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.delay !== this.props.delay) {
      if (!nextProps.delay && nextProps.token) {
        nextProps.history.push('/ready');
        // nextProps.history.replace('/simula');
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
    // if (storageLoading) return <div>Loading ...</div>;
    return (
      <div>
        <Switch>
          {/* <ProtectedRoute isAuthenticated={token !== null} path="/simula"component={Simula} /> */}
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
