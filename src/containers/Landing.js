import React, { Component } from 'react';
import RegisterForm from '../components/Landing/RegisterForm';
import Page from '../components/Layout/Page';
import Hero from '../components/Landing/Hero';
import NavigationBar from '../components/NavigationBar/NavigationBar';


class Landing extends Component {
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
    this.props.history.push('/step-two');
  }

  render() {
    return ([
      <NavigationBar key="0" />,
      <Hero key="1" frame={this.state.frame} />,
      <Page key="2" largeBanner >
        <RegisterForm
          style={{ marginTop: '20rem' }}
          onSubmit={this.handleSubmit}
        />
      </Page>,
    ]);
  }
}


export default Landing;
