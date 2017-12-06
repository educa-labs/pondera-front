import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateField, setFieldValue } from '../redux/forms';

const Field = ({
  name,
  validator,
  format,
  type,
  dispatch,
  handleOnChange,
  ...props
}, {
  formName,
  fields,
}) => {
  const onBlur = () => {
    if (typeof validator === 'function') {
      dispatch(validateField(formName)(name, validator, format));
    }
  };
  const onChange = (ev) => {
    const value = type === 'checkbox' ? ev.target.checked : ev.target.value;
    if (typeof handleOnChange === 'function') handleOnChange(value);
    dispatch(setFieldValue(formName)(name, value));
  };
  try {
    const field = fields[name];
    const extraProps = {
      ...props,
      onChange,
      correct: field.correct || undefined,
    };
    if (type === 'text' || type === 'select') {
      extraProps.value = field.value;
      extraProps.errorText = fields[name].error;
      extraProps.onBlur = validator ? onBlur : undefined;
    }
    if (type === 'checkbox') {
      extraProps.checked = field.value;
    }
  
    return (
      React.cloneElement(props.children, extraProps)
    );
  } catch (error) {
    throw new Error(`No existe el campo con nombre ${name}`);
  }
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

export default connect(null)(Field);
