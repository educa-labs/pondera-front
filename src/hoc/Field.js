import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateField, setFieldValue } from '../redux/forms';

const Field = (props, context) => {
  const {
    children,
    validator,
    name,
    logChange,
    checkValue,
    ...rest
  } = props;

  const onBlur = () => {
    props.checkValue(context.formName)(validator, name);
  };
  const onChange = (ev) => {
    props.logChange(context.formName)(props.name, ev.target.value);
  };

  return (
    React.cloneElement(props.children, {
      onBlur,
      onChange,
      ...rest,
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
