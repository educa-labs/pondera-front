import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Home from './Home';
import StepTwo from './StepTwo';
import Simula from './Simula';

const App = () => (
  <Switch key="1">
    <Route exact path="/" component={Home} />
    <Route path="/step-two" component={StepTwo} />
    <Route path="/simula" component={Simula} />
  </Switch>
);

export default App;
