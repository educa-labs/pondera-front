import React from 'react';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

const SelectInput = ({ options, ...props }) => (
  <Select {...props}>
    {options.map(opt => (
      <Option key={opt.value} value={opt.value} label={opt.label} />
    ))}
  </Select>
);

export default SelectInput;
