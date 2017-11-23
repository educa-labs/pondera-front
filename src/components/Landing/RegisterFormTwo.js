import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import wrapCard from '../../hoc/wrapCard';
import connectForm from '../../hoc/connectForm';
import BubbleWarpper from '../Other/BubbleWrapper';
import LoadingWrapper from '../Other/LoadingWrapper';
import Field from '../../hoc/Field';


const RegisterFormTwo = ({
  onSubmit,
  triggerAnimation,
  regions,
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
      <Field name="rut">
        <TextInput label="RUT" floatingLabel />
      </Field>
      <Field name="phone">
        <TextInput label="Número telefónico" floatingLabel />
      </Field>
      <LoadingWrapper loading={regions === null}>
        {() => (
          <Field name="region" type="select">
            <SelectInput label="Región" options={regions} />
          </Field>
        )}
      </LoadingWrapper>
      <Field name="accept" type="checkbox">
        <Checkbox label={label} />
      </Field>
      <BubbleWarpper trigger={triggerAnimation}>
        <Button
          color="primary"
          type="submit"
          className="btn--fullwidth"
          variant="raised"
        >
          Finalizar
        </Button>
      </BubbleWarpper>
    </Form>
  );
};


RegisterFormTwo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  triggerAnimation: PropTypes.bool.isRequired,
};


const form = connectForm('registerFormTwo')(RegisterFormTwo);

export default wrapCard(form);
