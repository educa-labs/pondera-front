import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFormValues } from '../reducers/register';
import RegisterForm from '../components/Landing/RegisterForm';
import Hero from '../components/Landing/Hero';
import NavigationBar from '../components/NavigationBar/NavigationBar';


class Home extends Component {
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

  handleSubmit(values) {
    this.props.setFormValues(values);
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
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  setFormValues: PropTypes.func.isRequired,
};

export default connect(null, {
  setFormValues,
})(Home);
