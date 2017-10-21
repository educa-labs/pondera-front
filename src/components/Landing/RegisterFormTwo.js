import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import is from 'is_js';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import wrapCard from '../../hoc/wrapCard';
import { checkEmpty } from '../../helpers';
import { FIELD_REQUIRED } from '../../strings';


const options = [
  { value: 1, label: 'Santiago' },
  { value: 2, label: 'La Serena' },
];

class StepTwoFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rut: '',
      phone: '',
      city: '',
      accept: false,
      error: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();
    const error = this.validateForm();
    if (is.empty(error)) {
      this.props.handleSubmit(this.state);
    } else {
      this.setState({ error });
    }
  }

  validateForm() {
    const { rut, phone, city } = this.state;
    const error = {};

    if (checkEmpty(rut)) error.rut = FIELD_REQUIRED;
    if (checkEmpty(phone)) error.phone = FIELD_REQUIRED;
    if (checkEmpty(city)) error.city = FIELD_REQUIRED;

    return error;
  }

  logValue(field) {
    return ev => this.setState({
      [field]: ev.target.value || ev.target.cheked,
      error: Object.assign(this.state.error, {
        [field]: undefined,
      }),
    });
  }

  render() {
    const { error } = this.state;
    const label = (
      <span>
        Acepto los <Link to="/terms">términos y condiciones</Link>
      </span>
    );
    return (
      <Form onSubmit={this.onSubmit}>
        <legend>Registro</legend>
        <div className="mui--text-subhead">completa tus datos</div>
        <br />
        <TextInput
          label="RUT"
          floatingLabel
          onChange={this.logValue('rut')}
          value={this.state.rut}
          errorText={error.rut}
        />
        <TextInput
          label="Número telefónico"
          floatingLabel
          onChange={this.logValue('phone')}
          value={this.state.phone}
          errorText={error.phone}
        />
        <SelectInput
          label="Comuna"
          value={this.state.city}
          onChange={this.logValue('city')}
          options={options}
        />
        <Checkbox
          label={label}
          checked={this.state.accept}
          onChange={this.logValue('accept')}
        />
        <Button
          color="primary"
          type="submit"
          className="btn--fullwidth"
          variant="raised"
        >
          Finalizar
        </Button>
      </Form>
    );
  }
}

export default wrapCard(StepTwoFrom);
