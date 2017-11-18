import React from 'react';
import PropTypes from 'prop-types';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

const SelectInput = ({ options, ...props }) => (
  <Select {...props}>
    {options.map(opt => (
      <Option key={opt.id} value={opt.id} label={opt.title} />
    ))}
  </Select>
);

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default SelectInput;
