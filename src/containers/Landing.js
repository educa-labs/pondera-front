import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../components/Landing/RegisterForm';
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
    return (
      <div className="page">
        <NavigationBar />
        <div className="orange-banner orange-banner--large" />
        <div className="page-content">
          <Hero frame={this.state.frame} />
          <RegisterForm
            style={{ transform: 'translateY(-2rem)' }}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}


export default Landing;
