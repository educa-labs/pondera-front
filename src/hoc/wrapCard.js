import React from 'react';
import Panel from 'muicss/lib/react/panel';


function wrapCard(Component) {
  const Card = ({ desk, ...props }) => (
    <Panel className={desk ? 'fixed-size-panel' : ''}>
      <Component {...props} />
    </Panel>
  );
  return Card;
}

export default wrapCard;

