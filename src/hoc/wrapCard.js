import React from 'react';
import Panel from 'muicss/lib/react/panel';


function wrapCard(Component) {
  const Card = props => (
    <Panel>
      <Component {...props} />
    </Panel>
  );
  return Card;
}

export default wrapCard;

