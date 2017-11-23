import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  submitForm,
  resetForm,
} from '../redux/forms';

/*
  handleSubmit: Funcion que recive como parametro una
  funcion que será ejecutada con los valores del formulario
*/

export default function (formName) {
  const mapStateToProps = (state) => {
    if (state[formName] === undefined) throw new Error(`There is no reducer named: ${formName}`);
    return ({
      fields: state[formName],
    });
  };
  const mapDispatchToProps = dispatch => ({
    resetForm: () => dispatch(resetForm(formName)()),
    onSubmitWrapper: onSubmit => (
      (ev) => {
        ev.preventDefault();
        dispatch(submitForm(formName)(onSubmit));
      }
    ),
  });

  return (Form) => {
    class ConnectedForm extends React.Component {
      getChildContext() {
        return {
          formName,
          fields: this.props.fields,
        };
      }

      render() {
        const { onSubmit, onSubmitWrapper, ...rest } = this.props;
        return (
          <Form
            onSubmit={onSubmitWrapper(onSubmit)}
            {...rest}
          />
        );
      }
    }

    ConnectedForm.childContextTypes = {
      formName: PropTypes.string,
      fields: PropTypes.object,
    };

    return connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
  };
}

