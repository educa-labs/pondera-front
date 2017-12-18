import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import TextInput from '../Inputs/TextInput';
import wrapCard from '../../hoc/wrapCard';
import alignCenter from '../../hoc/alignCenter';
import connectForm from '../../hoc/connectForm';
import { emptyValidator, emailValidator } from '../../helpers';
import BubbleWarpper from '../Other/BubbleWrapper';
import Field from '../../hoc/Field';
import LoadingWrapper from '../Other/LoadingWrapper';

const Loginform = ({
  onSubmit,
  sessionLoading,
  delay,
  submitError,
}) => (
  <Form onSubmit={onSubmit}>
    <legend>Ingresa</legend>
    <div className="mui--text-subhead">
      <span>o </span>
      <Link to="/">regístrate para ponderar</Link>
    </div>
    <br />
    <Field name="mail" validator={emailValidator}>
      <TextInput autoCapitalize="none" label="Correo electrónico" floatingLabel />
    </Field>
    <Field name="password" validator={emptyValidator}>
      <TextInput label="Contraseña" type="password" floatingLabel />
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
          {() => 'Acceder'}
        </LoadingWrapper>
      </Button>
    </BubbleWarpper>
    <div className="support-link">
      <Link to="/support">Olvidé mi contraseña</Link>
    </div>
  </Form>
);

Loginform.propTypes = {
  delay: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  sessionLoading: PropTypes.bool.isRequired,
  submitError: PropTypes.string,
};

Loginform.defaultProps = {
  submitError: null,
};

const form = connectForm('loginForm')(Loginform);
export default alignCenter(wrapCard(form));
