import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import wrapCard from '../../hoc/wrapCard';
import connectForm from '../../hoc/connectForm';
import { emptyValidator } from '../../helpers';

const Loginform = ({
  logChange,
  values,
  errors,
  submitHandler,
  onSubmit,
}) => (
  <Form onSubmit={submitHandler(onSubmit)}>
    <legend>Ingresa</legend>
    <TextInput
      label="Correo electrónico"
      floatingLabel
      onChange={logChange('email')}
      value={values.email}
      errorText={errors.email}
    />
    <TextInput
      label="Contraseña"
      type="password"
      floatingLabel
      onChange={logChange('password')}
      value={values.password}
      errorText={errors.password}
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

export default wrapCard(connectForm(
  Loginform,
  'loginForm',
  emptyValidator,
  ['email', 'password'],
));
