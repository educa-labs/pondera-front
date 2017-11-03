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
import { emptyValidator } from '../../helpers';


const options = [
  { value: 1, label: 'Santiago' },
  { value: 2, label: 'La Serena' },
];

const RegisterFormTwo = ({
  logChange,
  values,
  errors,
  submitHandler,
  onSubmit,
}) => {
  const label = (
    <span>
      Acepto los <Link to="/terms">términos y condiciones</Link>
    </span>
  );
  return (
    <Form onSubmit={submitHandler(onSubmit)}>
      <legend>Registro</legend>
      <div className="mui--text-subhead">completa tus datos</div>
      <br />
      <TextInput
        label="RUT"
        floatingLabel
        onChange={logChange('rut')}
        value={values.rut}
        errorText={errors.rut}
      />
      <TextInput
        label="Número telefónico"
        floatingLabel
        onChange={logChange('phone')}
        value={values.phone}
        errorText={errors.phone}
      />
      <SelectInput
        label="Comuna"
        onChange={logChange('city')}
        value={values.city}
        options={options}
      />
      <Checkbox
        label={label}
        checked={values.accept}
        onChange={logChange('accept')}
      />
      <Button
        color="primary"
        type="submit"
        className="btn--fullwidth"
        variant="raised"
      >
        Finalizar
      </Button>
    </Form>
  );
};


RegisterFormTwo.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  logChange: PropTypes.func.isRequired,
};


export default wrapCard(connectForm(
  RegisterFormTwo,
  'signupForm',
  emptyValidator,
  ['rut', 'phone', 'accept', 'city'],
));