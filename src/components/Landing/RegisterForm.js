import React from 'react';
import PropTypes from 'prop-types';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router-dom';
import TextInput from '../Inputs/TextInput';
import wrapCard from '../../hoc/wrapCard';
import Field from '../../hoc/Field';
import connectForm from '../../hoc/connectForm';


const notEmpty = value => new Promise((resolve, reject) => {
  if (value === '') {
    reject(new Error('Tienes que escribir algo'));
  }
  resolve();
});

const RegisterForm = ({ goNext }) => (
  <Form>
    <legend>Regístrate</legend>
    <div className="mui--text-subhead">
      <span>o </span>
      <Link to="login">inicia sesión en tu cuenta</Link>
    </div>
    <br />
    <Field name="name" validator={notEmpty}>
      <TextInput label="Nombre y apellido" floatingLabel />
    </Field>
    <Field name="email" validator={notEmpty}>
      <TextInput label="Correo electrónico" floatingLabel />
    </Field>
    <Field name="password">
      <TextInput label="Contraseña" floatingLabel type="password" />
    </Field>
    <Button
      color="primary"
      type="button"
      onClick={goNext}
      className="btn--fullwidth"
      variant="raised"
    >
      Registrarse
    </Button>
  </Form>
);


RegisterForm.propTypes = {
  goNext: PropTypes.func.isRequired,
};


const form = connectForm('signupForm')(RegisterForm);

export default wrapCard(form);

