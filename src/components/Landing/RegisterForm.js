import React from 'react';
import PropTypes from 'prop-types';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import { Link } from 'react-router-dom';
import TextInput from '../Inputs/TextInput';
import wrapCard from '../../hoc/wrapCard';
import connectForm from '../../hoc/connectForm';
import { emptyValidator } from '../../helpers';


const RegisterForm = ({
  logChange,
  values,
  errors,
  submitHandler,
  onSubmit,
}) => (
  <Form onSubmit={submitHandler(onSubmit)}>
    <legend>Regístrate</legend>
    <div className="mui--text-subhead">
      <span>o </span>
      <Link to="login">inicia sesión en tu cuenta</Link>
    </div>
    <br />
    <TextInput
      label="Nombre y apellido"
      floatingLabel
      onChange={logChange('name')}
      value={values.name}
      errorText={errors.name}
    />
    <TextInput
      label="Correo electrónico"
      floatingLabel
      onChange={logChange('email')}
      value={values.email}
      errorText={errors.email}
    />
    <TextInput
      label="Contraseña"
      floatingLabel
      onChange={logChange('password')}
      value={values.password}
      type="password"
      errorText={errors.password}
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


RegisterForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  logChange: PropTypes.func.isRequired,
};


export default wrapCard(connectForm(
  RegisterForm,
  'signupForm',
  emptyValidator,
  [
    'name',
    'email',
    'password',
  ],
));

