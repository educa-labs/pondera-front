import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const ResultBody = ({ result, similar, onSimilarClick }) => {
  if (result === null) return null;
  return (
    <div>
      <div className="result-header-gray">Resultados de ponderación</div>
      <Container className="result-body">
        <Row>
          <Col xs={7}>Mi puntaje</Col>
          <Col className="result-body-values" xs={5}>
            {result.pond}
          </Col>
        </Row>
        <Row>
          <Col xs={7}>Corte 2016</Col>
          <Col className="result-body-values" xs={5}>
            {result.cut || 'No disponible'}
          </Col>
        </Row>
        <Row>
          <Col xs={7}>Diferencia</Col>
          <Col className="result-body-values" xs={5}>
            {result.diff || 'No disponible'}
          </Col>
        </Row>
      </Container>
      {similar && <div className="result-header-gray">Carreras similares</div>}
      {similar && (
        <Container className="result-body">
          {similar.map(career => (
            <Row key={career.cId}>
              <Col xs={7}>{career.title}</Col>
              <Col className="pondera-link" xs={5}>
                <div onClick={() => onSimilarClick(career.cId, career.uId)}>
                  ponderar
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      )}
    </div>
  );
};

export default ResultBody;
