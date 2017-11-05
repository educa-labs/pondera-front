import React from 'react';
import RegisterFormTwo from './RegisterFormTwo';
import Page from '../Layout/Page';
import NavigationBar from '../NavigationBar/NavigationBar';

class StepTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    this.setState({ trigger: !this.state.true });
    setTimeout(() => this.props.history.push('/simula'), 200)
    
  }

  render() {
    return (
      <Page>
        <NavigationBar back onBackClick={() => this.props.history.goBack()} />
        <RegisterFormTwo
          onSubmit={this.handleSubmit}
          trigger={this.state.trigger}
        />
      </Page>
    );
  }
}

export default StepTwo;
