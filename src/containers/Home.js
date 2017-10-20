import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/Landing/RegisterForm';
import Hero from '../components/Landing/Hero';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      frame: 0,
    };
  }

  componentDidMount() {
    setTimeout(this.getNextFrame.bind(this), 1000);
  }

  getNextFrame() {
    this.setState(prevState => ({
      frame: prevState.frame + 1,
    }));
  }

  handleSubmit() {
    console.log(...this.state);
  }

  render() {
    return (
      <div className="page">
        <Hero frame={this.state.frame} />
        <RegisterForm
          email={this.state.email}
          password={this.state.password}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}  

export default Home;
