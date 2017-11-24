import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import ProtectedRoute from '../hoc/ProtectedRoute';
import { isLogged } from '../redux/session';
import { setPromptEvent } from '../redux/promptEvent';
import Landing from './Landing';
import Simula from './Simula';
import Login from './Login';
import Terms from '../components/Terms/Terms';
import Contacto from '../components/Terms/Contacto';
import Background from '../components/Layout/BackGround';
import Test from './Test';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('beforeinstallprompt', async (event) => {
      console.log('beforeinstallprompt fired');
      event.preventDefault();
      this.props.dispatch(setPromptEvent(event));
      return false;
    });
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.delay !== this.props.delay) {
      if (nextProps.delay) return false;
    }
    return true;
  }

  render() {
    const { isLogged, delay } = this.props;
    return (
      <div>
        <Background />
        <Switch>
          <Route path="/simula"component={Simula}/>
          <Route path="/login" component={Login}/>
          <Route path="/test" component={Test}/>
          <Route path="/terms" component={Terms}/>
          <Route path="/contacto" component={Contacto}/>
          <Route path="/" component={Landing}/>
        </Switch>
      </div>
    );
  }
}

const connectedApp = connect(state => ({
  isLogged: isLogged(state),
  delay: state.delayAnimation,
}))(App);

// export default App;
export default withRouter(connectedApp);
