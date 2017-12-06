import React from 'react';
import PropTypes from 'prop-types';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router-dom';
import TextInput from '../Inputs/TextInput';
import wrapCard from '../../hoc/wrapCard';
import alignCenter from '../../hoc/alignCenter';
import Field from '../../hoc/Field';
import connectForm from '../../hoc/connectForm';
import { lengthValidator, nameValidator, emailValidator } from '../../helpers';


const RegisterForm = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <legend>Regístrate</legend>
    <div className="mui--text-subhead">
      <span>o </span>
      <Link to="login">inicia sesión en tu cuenta</Link>
    </div>
    <br />
    <Field name="name" validator={nameValidator}>
      <TextInput id="name" label="Nombre y apellido" hint="Sebastián Guiller" />
    </Field>
    <Field name="mail" validator={emailValidator}>
      <TextInput autocapitalize="none" id="mail" label="Correo electrónico" hint="sebag@gmail.com" />
    </Field>
    <Field name="password" validator={lengthValidator(8)}>
      <TextInput id="password" label="Contraseña" floatingLabel type="password" />
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

export default alignCenter(wrapCard(form));

