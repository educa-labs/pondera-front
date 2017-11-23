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
    if (state.forms[formName] === undefined) throw new Error(`There is no reducer named: ${formName}`);
    return ({
      fields: state.forms[formName],
    });
  };
  const mapDispatchToProps = dispatch => ({
    resetForm: () => dispatch(resetForm(formName)()),
    onSubmitWrapper: (onSubmit, onSubmitError) => (
      (ev) => {
        ev.preventDefault();
        dispatch(submitForm(formName)(onSubmit, onSubmitError));
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
        const { onSubmit, onSubmitWrapper, onSubmitError, ...rest } = this.props;
        return (
          <Form
            onSubmit={onSubmitWrapper(onSubmit, onSubmitError)}
            {...rest}
          />
        );
      }
    }

    ConnectedForm.childContextTypes = {
      formName: PropTypes.string,
      fields: PropTypes.object,
    };

    ConnectedForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
      onSubmitWrapper: PropTypes.func.isRequired,
      onSubmitError: PropTypes.func,
    };

    ConnectedForm.defaultProps = {
      onSubmitError: null,
    };

    return connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
  };
}

