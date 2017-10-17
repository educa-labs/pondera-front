import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import RegisterForm from '../components/RegisterForm';


const Home = () => (
  <Container fluid className="page mui--bg-primary">
    <Row>
      <Col xs={12} md={4} md-offset={4}>
        <h1>Regístrate</h1>
        <RegisterForm />
        <div className="mui--text-body1">¿Ya tienes una cuenta? <Link to="login">Ingresa.</Link> </div>
      </Col>
    </Row>
  </Container>
);

export default Home;
