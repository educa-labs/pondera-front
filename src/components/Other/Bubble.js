import React from 'react';
import { Transition } from 'react-transition-group';

const Bubble = ({ show, onExit }) => (
  <Transition
    in={show}
    timeout={400}
    appear
    enter={false}
    unmountOnExit
    onExit={onExit}
  >
    {state => (
      <div className={`bubble bubble-${state}`} />
    )}
  </Transition>
);

export default Bubble;
