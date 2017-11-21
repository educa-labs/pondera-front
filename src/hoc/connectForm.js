import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setFieldValue,
  submitForm,
  resetForm,
} from '../redux/forms';

/*
  handleSubmit: Funcion que recive como parametro una
  funcion que será ejecutada con los valores del formulario
*/

export default function (formName, validator, fields) {
  const mapStateToProps = (state) => {
    if (state[formName] === undefined) throw new Error(`There is no reducer named: ${formName}`);
    return ({
      values: state[formName].values,
      errors: state[formName].errors,
    });
  };
  const mapDispatchToProps = dispatch => ({
    resetForm: () => dispatch(resetForm(formName)()),
    logChange: field => (
      ev => dispatch(setFieldValue(formName)(field, ev.target.value))
    ),
    submitHandler: handleSubmit => (
      (ev) => {
        ev.preventDefault();
        dispatch(submitForm(formName)(handleSubmit, validator, fields));
      }
    ),
  });

  return (Form) => {
    class ConnectedForm extends React.Component {
      getChildContext() {
        return {
          formName,
        };
      }
      render() {
        return <Form {...this.props} />;
      }
    }

    ConnectedForm.childContextTypes = {
      formName: PropTypes.string,
    };

    return connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
  };
}

