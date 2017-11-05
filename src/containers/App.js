import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Simula from './Simula';
import Login from './Login';
import Terms from '../components/Terms/Terms';
import Contacto from '../components/Terms/Contacto';
import Background from '../components/Layout/BackGround';
import Test from './Test';


const App = () => (
  <div>
    <Background />
    <Switch>
      <Route path="/simula" component={Simula} />
      <Route path="/test" component={Test} />
      <Route path="/login" component={Login} />
      <Route path="/terms" component={Terms} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/" component={Landing} />
    </Switch>
  </div>
);

export default App;
