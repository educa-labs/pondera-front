import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import StepTwo from './StepTwo';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/step-two" component={StepTwo} />
  </Switch>
);

export default App;
