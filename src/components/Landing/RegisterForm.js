import React from 'react';
import PropTypes from 'prop-types';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router-dom';
import TextInput from '../Inputs/TextInput';
import wrapCard from '../../hoc/wrapCard';
import Field from '../../hoc/Field';
import connectForm from '../../hoc/connectForm';
import { emptyValidator } from '../../helpers';


const RegisterForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <legend>Regístrate</legend>
    <div className="mui--text-subhead">
      <span>o </span>
      <Link to="login">inicia sesión en tu cuenta</Link>
    </div>
    <br />
    <Field name="name" validator={emptyValidator}>
      <TextInput label="Nombre y apellido" floatingLabel />
    </Field>
    <Field name="email" validator={emptyValidator}>
      <TextInput label="Correo electrónico" floatingLabel />
    </Field>
    <Field name="password">
      <TextInput label="Contraseña" floatingLabel type="password" />
    </Field>
    <Button
      color="primary"
      className="btn--fullwidth"
      variant="raised"
    >
      Registrarse
    </Button>
  </Form>
);


RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const form = connectForm('registerFormOne')(RegisterForm);

export default wrapCard(form);

