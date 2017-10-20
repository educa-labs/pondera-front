import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import is from 'is_js';
import Form from 'muicss/lib/react/form';
import _Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import WithError from '../../hoc/EnhanceInput';
import wrapCard from '../../hoc/wrapCard';
import { checkEmpty } from '../../helpers';
import { FIELD_REQUIRED } from '../../strings';


const Input = WithError(_Input);

class StepTwoFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rut: '',
      phone: '',
      city: null,
      accept: false,
      error: {},
    };
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
        <Input
          label="RUT"
          floatingLabel
          onChange={this.logValue('rut')}
          value={this.state.rut}
          errorText={error.rut}
        />
        <Input
          label="Número telefónico"
          floatingLabel
          onChange={this.logValue('phone')}
          value={this.state.phone}
          errorText={error.phone}
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
        >
          Finalizar
        </Button>
      </Form>
    );
  }
}

export default wrapCard(StepTwoFrom);
