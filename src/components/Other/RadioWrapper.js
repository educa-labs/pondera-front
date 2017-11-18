import React from 'react';

const RadioWrapper = ({ onSelect, selected, children, id }) => (
  <div className="radio-wrapper">
    <div className="md-radio">
      <input id={id} name="radio" type="radio" checked={selected === id} onClick={onSelect} />
      <label htmlFor={id}></label>
    </div>
    <div>
      {React.cloneElement(children, {
        disabled: selected !== id,
      })}
    </div>
  </div>
);

export default RadioWrapper;
