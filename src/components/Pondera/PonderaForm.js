import React from 'react';
import PropTypes from 'prop-types';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';
import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import wrapCard from '../../hoc/wrapCard';
import connectForm from '../../hoc/connectForm';
import { scoreValidator } from '../../helpers';

const options = [
  { value: 1, label: 'Santiago' },
  { value: 2, label: 'La Serena' },
];


const PonderaForm = ({
  logChange,
  values,
  errors,
  submitHandler,
  onSubmit,
  resetForm,
}) => (
  <Form onSubmit={submitHandler(onSubmit)}>
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
            type="number"
            onChange={logChange('nem')}
            value={values.nem}
            errorText={errors.nem}
          />
          <TextInput
            label="Leng"
            floatingLabel
            type="number"
            onChange={logChange('language')}
            value={values.language}
            errorText={errors.language}
          />
          <TextInput
            label="Hist"
            floatingLabel
            type="number"
            onChange={logChange('history')}
            value={values.history}
            errorText={errors.history}
          />
        </Col>
        <Col xs={6}>
          <TextInput
            label="Rank"
            floatingLabel
            type="number"
            onChange={logChange('ranking')}
            value={values.ranking}
            errorText={errors.ranking}
          />
          <TextInput
            label="Mate"
            floatingLabel
            type="number"
            onChange={logChange('math')}
            value={values.math}
            errorText={errors.math}
          />
          <TextInput
            label="Cien"
            floatingLabel
            type="number"
            onChange={logChange('science')}
            value={values.science}
            errorText={errors.science}
          />
        </Col>
      </Row>
    </Container>
    <SelectInput
      label="Universidad"
      options={options}
    />
    <SelectInput
      label="Carrera"
      options={options}
    />
    <Row>
      <Col xs={6}>
        <Button
          color="primary"
          type="button"
          className="btn--fullwidth"
          variant="flat"
          onClick={resetForm}
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


const form = connectForm('ponderaForm')(PonderaForm);
export default wrapCard(form);
