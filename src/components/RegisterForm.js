import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';

const LoginForm = () => (
  <Panel>
    <Form>
      <Input label="Correo electrónico" />
      <Input label="Contraseña" />
    </Form>
  </Panel>
);

export default LoginForm;

