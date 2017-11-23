import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateField, setFieldValue } from '../redux/forms';

const Field = ({
  name,
  validator,
  type,
  ...props
}, {
  formName,
  fields,
}) => {
  const onBlur = () => {
    props.checkValue(formName)(name, validator);
  };
  const onChange = (ev) => {
    const value = type === 'checkbox' ? ev.target.checked : ev.target.value;
    props.logChange(formName)(name, value);
  };

  const valueKey = type === 'checkbox' ? 'checked' : 'value';

  return (
    React.cloneElement(props.children, {
      onBlur: validator ? onBlur : null,
      onChange,
      [valueKey]: fields[name].value,
      errorText: ['select', 'checkbox'].includes(type) ? undefined : fields[name].error,
    })
  );
};

Field.contextTypes = {
  formName: PropTypes.string,
  fields: PropTypes.object,
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
