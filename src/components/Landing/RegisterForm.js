import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import is from 'is_js';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import TextInput from '../Inputs/TextInput';
import wrapCard from '../../hoc/wrapCard';
import { checkEmpty } from '../../helpers';
import { FIELD_REQUIRED } from '../../strings';


class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
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

  logValue(field) {
    return ev => this.setState({
      [field]: ev.target.value,
      error: Object.assign(this.state.error, {
        [field]: undefined,
      }),
    });
  }

  validateForm() {
    const { name, email, password } = this.state;
    const error = {};

    if (checkEmpty(name)) error.name = FIELD_REQUIRED;
    if (checkEmpty(email)) error.email = FIELD_REQUIRED;
    if (checkEmpty(password)) error.password = FIELD_REQUIRED;

    return error;
  }

  render() {
    const { error } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <legend>Regístrate</legend>
        <div className="mui--text-subhead">
          <span>o </span>
          <Link to="login">inicia sesión en tu cuenta</Link>
        </div>
        <br />
        <TextInput
          label="Nombre y apellido"
          floatingLabel
          onChange={this.logValue('name')}
          value={this.state.name}
          errorText={error.name}
        />
        <TextInput
          label="Correo electrónico"
          floatingLabel
          onChange={this.logValue('email')}
          value={this.state.email}
          errorText={error.email}
        />
        <TextInput
          label="Contraseña"
          floatingLabel
          onChange={this.logValue('password')}
          value={this.state.password}
          type="password"
          errorText={error.password}
        />
        <Button
          color="primary"
          type="submit"
          className="btn--fullwidth"
          variant="raised"
        >
          Registrarse
        </Button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default wrapCard(RegisterForm);

