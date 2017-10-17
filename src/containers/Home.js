import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import RegisterForm from '../components/Landing/RegisterForm';
import Hero from '../components/Landing/Hero';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      frame: 0,
    };
  }

  componentDidMount() {
    setTimeout(this.getNextFrame.bind(this), 1000);
  }

  getNextFrame() {
    this.setState(prevState => ({
      frame: prevState.frame + 1,
    }));
  }

  handleSubmit() {
    console.log(...this.state);
  }

  render() {
    return (
      <div className="page">
        <Hero frame={this.state.frame} />
        <Container fluid style={{ position: 'relative', top: '-2rem' }}>
          <Row>
            <Col xs={12} md={4} md-offset={4}>
              <RegisterForm
                email={this.state.email}
                password={this.state.password}
                onSubmit={this.handleSubmit}
              />
              <div className="mui--text-body1">¿Ya tienes una cuenta? <Link to="login">Ingresa.</Link> </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}  

export default Home;
