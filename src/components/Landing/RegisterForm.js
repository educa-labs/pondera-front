import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

const RegisterForm = ({ onSubmit }) => (
  <Container fluid style={{ position: 'relative', top: '-4rem' }}>
    <Row>
      <Col xs={12} md={4} md-offset={4}>
        <Panel>
          <Form onSubmit={onSubmit}>
            <legend>Regístrate</legend>
            <div className="mui--text-subhead">
              <span>o </span>
              <Link to="login">inicia sesión en tu cuenta</Link>
            </div>
            <br />
            <Input label="Nombre y apellido" />
            <Input label="Correo electrónico" />
            <Input
              label="Contraseña"
              type="password"
            />
            <Button
              color="primary"
              type="submit"
              className="btn--fullwidth"
            >
              Registrarse
            </Button>
          </Form>
        </Panel>
      </Col>
    </Row>
  </Container>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;

