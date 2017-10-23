import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import PonderaForm from '../components/Pondera/PonderaForm';

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
    this.generateInputList = this.generateInputList.bind(this);
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
      console.log(ev.target);
      this.setState(prevState => ({
        ...prevState,
        [field]: ev,
      }));
    };
  }

  generateInputList() {
    const fields = [
      { label: 'NEM', value: 'nem' },
    ];
    return fields.map(({ label, value }) => ({
      label,
      key: value,
      onChange: (ev) => { this.setState({ [value]: ev.target.value }); },
      value: this.state[value],
    }));
  }


  render() {
    return (
      <div className="page">
        <NavigationBar />
        <div className="orange-banner" />
        <div className="page-content">
          <PonderaForm
            onSubmit={this.onSubmit}
            inputList={this.generateInputList()}
          />
        </div>
      </div>
    );
  }
}

export default Pondera;
