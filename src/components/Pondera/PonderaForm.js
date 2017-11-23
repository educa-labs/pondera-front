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
import Field from '../../hoc/Field';
import LoadingWrapper from '../Other/LoadingWrapper';
import RadioWrapper from '../Other/RadioWrapper';
import { HISTORY, SCIENCE } from '../../helpers/constants';

const PonderaForm = ({
  onSubmit,
  resetForm,
  careers,
  univs,
  isLoading,
  onUnivChange,
  onSelectTest,
  selectedTest,
  setHistoryRef,
  setScienceRef,
}) => (
  <Form onSubmit={onSubmit}>
    <legend>Ponderar</legend>
    <div className="mui--text-subhead">
      Ingresa tus puntajes y carrera
    </div>
    <Container>
      <Row>
        <Col xs={6} className="padding-col">
          <Field name="nem">
            <TextInput
              label="NEM"
              floatingLabel
              type="number"
            />
          </Field>
          <Field name="language">
            <TextInput
              label="Leng"
              floatingLabel
              type="number"
            />
          </Field>
          <RadioWrapper
            onSelect={onSelectTest}
            selected={selectedTest}
            id={HISTORY}
          >
            <Field name="history">
              <TextInput
                label="Hist"
                floatingLabel
                type="number"
                setRef={setHistoryRef}
              />
            </Field>
          </RadioWrapper>
        </Col>
        <Col xs={6} className="padding-col">
          <Field name="ranking">
            <TextInput
              label="Rank"
              floatingLabel
              type="number"
            />
          </Field>
          <Field name="math">
            <TextInput
              label="Mate"
              floatingLabel
              type="number"
            />
          </Field>
          <RadioWrapper
            onSelect={onSelectTest}
            selected={selectedTest}
            id={SCIENCE}
          >
            <Field name="science">
              <TextInput
                label="Cien"
                floatingLabel
                type="number"
                setRef={setScienceRef}
              />
            </Field>
          </RadioWrapper>
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
  onSelectTest: PropTypes.func.isRequired,
  selectedTest: PropTypes.string.isRequired,
  resetForm: PropTypes.func.isRequired,
  setHistoryRef: PropTypes.func.isRequired,
  setScienceRef: PropTypes.func.isRequired,
};


const form = connectForm('ponderaForm')(PonderaForm);
export default wrapCard(form);
