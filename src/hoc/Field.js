import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateField, setFieldValue } from '../redux/forms';

const Field = ({ name, validator, ...props }, { formName }) => {
  const onBlur = () => {
    props.checkValue(formName)(name, validator);
  };
  const onChange = (ev) => {
    props.logChange(formName)(name, ev.target.value);
  };

  return (
    React.cloneElement(props.children, {
      onBlur,
      onChange,
    })
  );
};

Field.contextTypes = {
  formName: PropTypes.string,
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
