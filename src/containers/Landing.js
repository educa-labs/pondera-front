import React, { Component } from 'react';
import PageTransition from '../components/Layout/PageTransition';
import StepOne from '../components/Landing/StepOne';
import StepTwo from '../components/Landing/StepTwo';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  render() {
    const currentPage = this.props.location.pathname;
    return (
      <PageTransition
        currentPage={currentPage}
        pathOne="/one"
        pathTwo="/two"
        defaultPath="/"
      >
        <StepOne />
        <StepTwo />
      </PageTransition>
    );
  }
}

export default Landing;
