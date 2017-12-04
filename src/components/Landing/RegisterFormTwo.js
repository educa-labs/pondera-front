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
import { emptyValidator, formatPhone, phoneValidator } from '../../helpers';


const RegisterFormTwo = ({
  onSubmit,
  regions,
  sessionLoading,
  delay,
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
      <Field name="rut" validator={emptyValidator}>
        <TextInput
          label="RUT"
          hintText="Sin puntos y ni guion. Ej, 189184964"
          floatingLabel
        />
      </Field>
      <Field
        name="phone"
        validator={phoneValidator}
        format={formatPhone}
      >
        <TextInput
          label="Celular"
          hintText="Los últimos 9 dígitos. Ej, 948464111"
          floatingLabel
        />
      </Field>
      <LoadingWrapper loading={regions === null}>
        {() => (
          <Field name="regionId" type="select">
            <SelectInput label="Región" placeholder="Region" options={regions} />
          </Field>
        )}
      </LoadingWrapper>
      <Field name="accept" type="checkbox">
        <Checkbox label={label} />
      </Field>
      <BubbleWarpper trigger={delay}>
        <Button
          color="primary"
          type="submit"
          className="btn--fullwidth"
          variant="raised"
        >
          <LoadingWrapper loading={sessionLoading} white>
            {() => 'Finalizar'}
          </LoadingWrapper>
        </Button>
      </BubbleWarpper>
    </Form>
  );
};

RegisterFormTwo.defaultProps = {
  regions: null,
};


RegisterFormTwo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  sessionLoading: PropTypes.bool.isRequired,
  delay: PropTypes.bool.isRequired,
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};


const form = connectForm('registerFormTwo')(RegisterFormTwo);

export default alignCenter(wrapCard(form));
