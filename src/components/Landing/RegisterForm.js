import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'muicss/lib/react/panel';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';

const RegisterForm = ({ onSubmit }) => (
  <Panel>
    <Form onSubmit={onSubmit}>
      <legend>Regístrate</legend>
      <Input label="Correo electrónico" />
      <Input label="Contraseña" />
    </Form>
  </Panel>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;

