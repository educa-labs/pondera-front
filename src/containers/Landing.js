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
    setTimeout(this.getNextFrame.bind(this), 600);
  }

  getNextFrame() {
    this.setState(prevState => ({
      frame: prevState.frame + 1,
    }));
  }

  handleSubmit() {
    this.props.history.push('/step-two');
  }

  render() {
    return ([
      <NavigationBar key="0" />,
      <Page largeBanner key="1">
        <Hero frame={this.state.frame} />
        <RegisterForm
          style={{ transform: 'translateY(-2rem)' }}
          onSubmit={this.handleSubmit}
        />
      </Page>,
    ]);
  }
}


export default Landing;
