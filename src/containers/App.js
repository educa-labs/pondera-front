import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { setPromptEvent } from '../redux/promptEvent';
import Landing from './Landing';
import Simula from './Simula';
import Login from './Login';
import Terms from '../components/Terms/Terms';
import Ready from '../components/Terms/Ready';
import Contacto from '../components/Terms/Contacto';
import Background from '../components/Layout/BackGround';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('beforeinstallprompt', async (event) => {
      console.log('beforeinstallprompt fired');
      event.preventDefault();
      this.props.dispatch(setPromptEvent(event));
      return false;
    });
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

const connectedApp = connect(null)(App);

// export default App;
export default withRouter(connectedApp);
