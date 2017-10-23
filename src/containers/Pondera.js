import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Form from '../components/Pondera/Form';

class Pondera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nem: '',
      ranking: '',
      math: '',
      languague: '',
      history: '',
      science: '',
    };
    this.getValue = this.getValue.bind(this);
    this.logChange = this.logChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.goNext();
  }

  getValue(field) {
    console.log(field);
    const val = this.state[field];
    console.log(val);
    return val;
  }

  logChange(field) {
    return (ev) => {
      this.setState({ [field]: ev.target.value });
    };
  }



  render() {
    return (
      <div className="page">
        <NavigationBar />
        <div className="orange-banner" />
        <div className="page-content">
          <Form
            onSubmit={this.onSubmit}
            logNamChange={this.logChange('nem')}
            nem={this.state.nem}
            logChange={this.logChange}
            getValue={this.getValue}
          />
        </div>
      </div>
    );
  }
}

export default Pondera;
