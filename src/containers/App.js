import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import StepTwo from './StepTwo';
import Simula from './Simula';
import Login from './Login';
import Terms from '../components/Terms/Terms';
import Contacto from '../components/Terms/Contacto';

const App = () => (
  <Switch key="1">
    <Route exact path="/" component={Landing} />
    <Route path="/step-two" component={StepTwo} />
    <Route path="/simula" component={Simula} />
    <Route path="/login" component={Login} />
    <Route path="/terms" component={Terms} />
    <Route path="/contacto" component={Contacto} />
  </Switch>
);

export default App;
