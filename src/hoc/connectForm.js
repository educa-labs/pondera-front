import { connect } from 'react-redux';
import { logChange, validFormSelector, submitForm } from '../redux/forms';

/*
  handleSubmit: Funcion que recive como parametro una
  funcion que será ejecutada con los valores del formulario
*/

export default function (Component, formName, validator, fields) {
  const mapStateToProps = (state) => {
    if (state[formName] === undefined) throw new Error(`There is no reducer named: ${formName}`);
    return ({
      values: state[formName].values,
      errors: state[formName].errors,
      isValidForm: validFormSelector(state[formName]),
    });
  };
  const mapDispatchToProps = dispatch => ({
    logChange: field => (
      ev => dispatch(logChange(formName, field, ev.target.value))
    ),
    submitHandler: handleSubmit => (
      (ev) => {
        ev.preventDefault();
        dispatch(submitForm(formName, handleSubmit, validator, fields));
      }
    ),
  });


  const connectForm = connect(mapStateToProps, mapDispatchToProps)(Component);
  return connectForm;
}

