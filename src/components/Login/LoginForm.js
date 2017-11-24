import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import TextInput from '../Inputs/TextInput';
import wrapCard from '../../hoc/wrapCard';
import alignCenter from '../../hoc/alignCenter';
import connectForm from '../../hoc/connectForm';
import { emptyValidator } from '../../helpers';
import BubbleWarpper from '../Other/BubbleWrapper';

const Loginform = ({
  logChange,
  values,
  errors,
  submitHandler,
  onSubmit,
  triggerAnimation,
}) => {
  return (
    <Form onSubmit={submitHandler(onSubmit)}>
      <legend>Ingresa</legend>
      <div className="mui--text-subhead">
        <span>o </span>
        <Link to="/">regístrate para ponderar</Link>
      </div>
      <br />
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
      <BubbleWarpper trigger={triggerAnimation}>
        <Button
          color="primary"
          type="submit"
          className="btn--fullwidth"
          variant="raised"
        >
          Acceder
        </Button>
      </BubbleWarpper>
    </Form>
  );
};

const form = connectForm(
  'loginForm',
  emptyValidator,
  ['email', 'password'],
)(Loginform);

export default alignCenter(wrapCard(form));
