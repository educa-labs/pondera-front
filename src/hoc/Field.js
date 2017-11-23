import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateField, setFieldValue } from '../redux/forms';

const Field = ({
  name,
  validator,
  type,
  checkValue,
  logChange,
  ...props
}, {
  formName,
  fields,
}) => {
  const onBlur = () => {
    checkValue(formName)(name, validator);
  };
  const onChange = (ev) => {
    const value = type === 'checkbox' ? ev.target.checked : ev.target.value;
    logChange(formName)(name, value);
  };

  const { value } = fields[name];

  const extraProps = {
    ...props,
    onChange,
  };
  if (type === 'text') {
    extraProps.value = value;
    extraProps.errorText = fields[name].error;
    extraProps.onBlur = validator ? onBlur : undefined;
  }
  if (type === 'select') {
    extraProps.value = value;
  }
  if (type === 'checkbox') {
    extraProps.checked = value;
  }

  return (
    React.cloneElement(props.children, extraProps)
  );
};

Field.contextTypes = {
  formName: PropTypes.string,
  fields: PropTypes.object,
};

Field.propTypes = {
  type: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
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
