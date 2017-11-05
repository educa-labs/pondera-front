import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import Page from '../Layout/Page';
import Hero from './Hero';


class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ frame: 1 }), 600);
  }

  handleSubmit() {
    this.props.history.push('/two');
  }

  render() {
    return (
      <Page largeBanner >
        <Hero frame={this.state.frame} />
        <RegisterForm
          style={{ transform: 'translateY(-2rem)' }}
          onSubmit={this.handleSubmit}
        />
      </Page>
    );
  }
}


export default StepOne;
