import React from 'react';
import PropTypes from 'prop-types';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import WithError from '../../hoc/EnhanceInput';

const SelectInput = ({ options, placeholder, ...props }) => {
  const defaultOption = {
    id: '',
    title: placeholder,
  };
  return (
    <Select {...props}>
      {[defaultOption, ...options].map(opt => (
        <Option key={opt.id} value={opt.id} label={opt.title} />
      ))}
    </Select>
  );
};

SelectInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default WithError(SelectInput);
