import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import is from 'is_js';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';
import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import wrapCard from '../../hoc/wrapCard';

const options = [
  { value: 1, label: 'Santiago' },
  { value: 2, label: 'La Serena' },
];

const PonderaForm = ({
  onSubmit,
  logChange,
  getValue,
  clearForm,
  logNemChange,
  nem,
}) => (
  <Form onSubmit={onSubmit}>
    <legend>Ponderar</legend>
    <div className="mui--text-subhead">
      Ingresa tus puntajes y carrera
    </div>
    <Container>
      <Row>
        <Col xs={6}>
          <TextInput
            label="NEM"
            floatingLabel
            onChange={logNemChange}
            value={nem}
          />
          <TextInput
            label="NEM"
            floatingLabel
            onChange={logNemChange}
            value={nem}
          />
          <TextInput
            label="NEM"
            floatingLabel
            onChange={logNemChange}
            value={nem}
          />
        </Col>
        <Col xs={6}>
          <TextInput
            label="Ranking"
            floatingLabel
            onChange={ev => logChange('ranking', ev.target.value)}
            value={getValue('ranking')}
          />
          <TextInput
            label="NEM"
            floatingLabel
            onChange={logNemChange}
            value={nem}
          />
          <TextInput
            label="NEM"
            floatingLabel
            onChange={logNemChange}
            value={nem}
          />
        </Col>
      </Row>
    </Container>
    <SelectInput
      label="Comuna"
      options={options}
    />
    <SelectInput
      label="Comuna"
      options={options}
    />
    <Row>
      <Col xs={6}>
        <Button
          onClick={clearForm}
          color="primary"
          type="button"
          className="btn--fullwidth"
          variant="flat"
        >
          Reestablecer
        </Button>
      </Col>
      <Col xs={6}>
        <Button
          color="primary"
          type="submit"
          className="btn--fullwidth"
          variant="raised"
        >
          Calcular
        </Button>
      </Col>
    </Row>
  </Form>
);

export default wrapCard(PonderaForm);
