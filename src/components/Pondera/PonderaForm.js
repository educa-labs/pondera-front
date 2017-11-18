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
import LoadingWrapper from '../Other/LoadingWrapper';

const PonderaForm = ({
  logChange,
  values,
  errors,
  submitHandler,
  onSubmit,
  resetForm,
  careers,
  univs,
  isLoading,
  onUnivChange,
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
    <LoadingWrapper loading={univs === null}>
      {() => (
        <div>
          <SelectInput
            label="Universidad"
            options={univs}
            onChange={onUnivChange}
          />
          <LoadingWrapper loading={isLoading}>
            {() => (
              <SelectInput
                label="Carrera"
                options={careers}
                onChange={logChange('career')}
              />
            )}
          </LoadingWrapper>
        </div>
      )}
    </LoadingWrapper>
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

PonderaForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  careers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onUnivChange: PropTypes.func.isRequired,
};


const form = connectForm('ponderaForm')(PonderaForm);
export default wrapCard(form);
