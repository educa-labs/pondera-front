import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import StepTwo from './StepTwo';
import Simula from './Simula';

const App = () => (
  <Switch key="1">
    <Route exact path="/" component={Landing} />
    <Route path="/step-two" component={StepTwo} />
    <Route path="/simula" component={Simula} />
  </Switch>
);

export default App;
