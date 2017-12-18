import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { truncateString } from '../../helpers';

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
            {result.diff.toFixed(2) || 'No disponible'}
          </Col>
        </Row>
      </Container>
      {similar && <div className="result-header-gray">Carreras similares</div>}
      {similar && (
        <Container className="result-body">
          <Row>
            <Col xs={8}>
              {similar.map(career => (
                <div key={career.cId} className="similar-title">
                  <span>{truncateString(`${career.cTitle} ${career.uInitials}`, 50)}</span>
                </div>
              ))}
            </Col>
            <Col xs={4}>
              {similar.map(career => (
                <div key={career.cId} className="similar-title">
                  <div className="pondera-link" onClick={() => onSimilarClick(career.cId, career.uId)}>
                    ponderar
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ResultBody;
