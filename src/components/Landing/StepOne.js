import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Page from '../Layout/Page';
import Hero from './Hero';
import NavigationBar from '../NavigationBar/NavigationBar';


class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ frame: 1 }), 600);
  }

  render() {
    return (
      <Page landing>
        <NavigationBar />
        <Hero frame={this.state.frame} />
        <RegisterForm {...this.props} />
      </Page>
    );
  }
}


export default StepOne;
