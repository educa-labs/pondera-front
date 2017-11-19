import React from 'react';

const RadioWrapper = ({ onSelect, selected, children, id, onClick }) => (
  <div className="radio-wrapper" onClick={onClick}>
    <div className="md-radio">
      <input id={id} name="radio" readOnly type="radio" checked={selected === id} onClick={onSelect} />
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
