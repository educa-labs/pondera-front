import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import wrapCard from '../../hoc/wrapCard';
import alignCenter from '../../hoc/alignCenter';
import connectForm from '../../hoc/connectForm';
import BubbleWarpper from '../Other/BubbleWrapper';
import LoadingWrapper from '../Other/LoadingWrapper';
import Field from '../../hoc/Field';
import {
  phoneValidator, formatRut, rutValidator, emptyValidator,
} from '../../helpers';


const RegisterFormTwo = ({
  onSubmit,
  regions,
  sessionLoading,
  delay,
  submitError,
}) => {
  const label = (
    <span>
      Acepto los <Link to="/terms">términos y condiciones</Link>
    </span>
  );
  return (
    <Form onSubmit={onSubmit}>
      <legend>Registro</legend>
      <div className="mui--text-subhead">completa tus datos</div>
      <br />
      <Field name="rut" validator={rutValidator} format={formatRut}>
        <TextInput
          label="RUT"
          hintText="Sin puntos ni guion. Ej, 189184964"
          floatingLabel
        />
      </Field>
      <Field
        name="phone"
        validator={phoneValidator}
      >
        <TextInput
          label="Celular"
          hintText="Sin +569. Ej, 48464111"
          floatingLabel
        />
      </Field>
      <LoadingWrapper loading={regions === null}>
        {() => (
          <Field name="regionId" type="select" validator={emptyValidator}>
            <SelectInput label="Región" placeholder="Escoge una región" options={regions} />
          </Field>
        )}
      </LoadingWrapper>
      <Field name="accept" type="checkbox">
        <Checkbox label={label} />
      </Field>
      <div className="mui-textfield--error-text">{submitError}</div>
      <BubbleWarpper trigger={delay}>
        <Button
          color="primary"
          type="submit"
          className="btn--fullwidth"
          variant="raised"
          disabled={sessionLoading}
        >
          <LoadingWrapper loading={sessionLoading} white>
            {() => 'Finalizar'}
          </LoadingWrapper>
        </Button>
      </BubbleWarpper>
      <div className="support-link">
        <Link to="/support">No puedo crear una cuenta</Link>
      </div>
    </Form>
  );
};

RegisterFormTwo.defaultProps = {
  regions: null,
  submitError: null,
};


RegisterFormTwo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  sessionLoading: PropTypes.bool.isRequired,
  delay: PropTypes.bool.isRequired,
  submitError: PropTypes.string,
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};


const form = connectForm('registerFormTwo')(RegisterFormTwo);

export default alignCenter(wrapCard(form));
