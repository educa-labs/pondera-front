import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const ResultBody = ({ result }) => (
  <div>
    <div className="result-header-gray">Resultados de ponderación</div>
    <Container className="result-body">
      <Row>
        <Col xs={7}>Mi puntaje</Col>
        <Col className="result-body-values" xs={5}>
          {result.score}
        </Col>
      </Row>
      <Row>
        <Col xs={7}>Corte 2016</Col>
        <Col className="result-body-values" xs={5}>
          {result.cut}
        </Col>
      </Row>
      <Row>
        <Col xs={7}>Diferencia</Col>
        <Col className="result-body-values" xs={5}>
          {result.diff}
        </Col>
      </Row>
    </Container>
    <div className="result-header-gray">Carreras similares</div>
    <Container className="result-body">
      <Row>
        <Col xs={7}>{result.careers[0].title}</Col>
        <Col className="pondera-link" xs={5}>
          ponderar
        </Col>
      </Row>
      <Row>
        <Col xs={7}>{result.careers[1].title}</Col>
        <Col className="pondera-link" xs={5}>
          ponderar
        </Col>
      </Row>
      <Row>
        <Col xs={7}>{result.careers[2].title}</Col>
        <Col className="pondera-link" xs={5}>
          ponderar
        </Col>
      </Row>
    </Container>
  </div>
);

export default ResultBody;
