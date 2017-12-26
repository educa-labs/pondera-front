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
import { resetField } from '../../redux/forms';
import { HISTORY, SCIENCE } from '../../helpers/constants';
import { scoreValidator, emptyValidator } from '../../helpers';

const parseOptions = car => ({
  title: `${car.title} - ${car.campusTitle}`,
  id: car.id,
});

class PonderaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTest: HISTORY,
    };
    this.onSelectTest = this.onSelectTest.bind(this);
  }

  async onSelectTest(ev) {
    const selectedTest = ev.target.id;
    let other;

    await this.setState({ selectedTest });
    if (selectedTest === HISTORY) {
      other = 'science';
      this.historyEl.controlEl.focus();
    } else {
      other = 'history';
      this.scienceEl.controlEl.focus();
    }
    this.props.dispatch(resetField('ponderaForm')(other));
    this.props.dispatch(resetField('ponderaForm')('cId'));
  }

  render() {
    const {
      onSubmit,
      resetForm,
      careers,
      univs,
      isLoading,
      calculating,
      onUnivChange,
      onReset,
    } = this.props;
    const { selectedTest } = this.state;
    return (
      <Form onSubmit={onSubmit}>
        <legend>Ponderar</legend>
        <div className="mui--text-subhead">
          Ingresa tus puntajes y carrera
        </div>
        <Container>
          <Row>
            <Col xs={6} className="padding-col">
              <Field name="NEM" validator={scoreValidator}>
                <TextInput
                  label="NEM"
                  floatingLabel
                  type="number"
                />
              </Field>
              <Field name="language" validator={scoreValidator}>
                <TextInput
                  label="Leng"
                  floatingLabel
                  type="number"
                />
              </Field>
              <RadioWrapper
                onSelect={this.onSelectTest}
                selected={selectedTest}
                id={HISTORY}
              >
                <Field name="history" validator={scoreValidator}>
                  <TextInput
                    label="Hist"
                    floatingLabel
                    type="number"
                    setRef={(ref) => { this.historyEl = ref; }}
                  />
                </Field>
              </RadioWrapper>
            </Col>
            <Col xs={6} className="padding-col">
              <Field name="ranking" validator={scoreValidator}>
                <TextInput
                  label="Rank"
                  floatingLabel
                  type="number"
                />
              </Field>
              <Field name="math" validator={scoreValidator}>
                <TextInput
                  label="Mate"
                  floatingLabel
                  type="number"
                />
              </Field>
              <RadioWrapper
                onSelect={this.onSelectTest}
                selected={selectedTest}
                id={SCIENCE}
              >
                <Field name="science" validator={scoreValidator}>
                  <TextInput
                    label="Cien"
                    floatingLabel
                    type="number"
                    setRef={(ref) => { this.scienceEl = ref; }}
                  />
                </Field>
              </RadioWrapper>
            </Col>
          </Row>
        </Container>
        <LoadingWrapper loading={univs === null}>
          {() => (
            <div>
              <Field name="uId" type="select" handleOnChange={onUnivChange}>
                <SelectInput
                  label="Universidad"
                  options={univs}
                  placeholder="Escoge una universidad"
                />
              </Field>
              <LoadingWrapper loading={isLoading}>
                {() => (
                  <Field name="cId" type="select" validator={emptyValidator}>
                    <SelectInput
                      label="Carrera"
                      options={careers.map(parseOptions)}
                      placeholder="Elige una carrera"
                    />
                  </Field>
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
              onClick={onReset}
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
              disabled={calculating}
            >
              <LoadingWrapper loading={calculating} white>
                {() => 'Calcular'}
              </LoadingWrapper>
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}


PonderaForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  careers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onUnivChange: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  calculating: PropTypes.bool.isRequired,
};


const form = connectForm('ponderaForm')(PonderaForm);
export default wrapCard(form);
