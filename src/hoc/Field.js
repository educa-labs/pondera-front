import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateField, setFieldValue } from '../redux/forms';

const Field = ({ name, validator, ...props }, { formName, values, errors }) => {
  const onBlur = () => {
    console.log('AAA', name);
    props.checkValue(formName)(name, validator);
  };
  const onChange = (ev) => {
    props.logChange(formName)(name, ev.target.value);
  };

  return (
    React.cloneElement(props.children, {
      onBlur: validator ? onBlur : null,
      onChange,
      value: values[name],
      errorText: errors[name],
    })
  );
};

Field.contextTypes = {
  formName: PropTypes.string,
  values: PropTypes.object,
  errors: PropTypes.object,
};


const dispatchToProps = dispatch => ({
  checkValue: formName => (
    (fieldName, validator) => dispatch(validateField(formName)(fieldName, validator))
  ),
  logChange: formName => (
    (fieldName, value) => dispatch(setFieldValue(formName)(fieldName, value))
  ),
});

export default connect(null, dispatchToProps)(Field);
