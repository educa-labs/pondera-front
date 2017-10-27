import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import RegisterForm from '../components/RegisterForm';


const AnimatedBanner = ({ frame }) => ([
  <div key="0" className="from-left mui--text-display2">
    <h2>
      Pondera
    </h2>
  </div>,
  <div key="1" className={`${frame === 1 ? 'from-right' : ''} mui--text-display2`}>
    <div className="car-photo">
      {frame === 1 && frame}
    </div>
  </div>,
]);


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
      <Container fluid className="page mui--bg-primary">
        <Row>
          <Col xs={12} md={4} md-offset={4}>
            <AnimatedBanner frame={this.state.frame} />
            <RegisterForm
              email={this.state.email}
              password={this.state.password}
              onSubmit={this.handleSubmit}
            />
            <div className="mui--text-body1">¿Ya tienes una cuenta? <Link to="login">Ingresa.</Link> </div>
          </Col>
        </Row>
      </Container>
    );
  }
}  

export default Home;