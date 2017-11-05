import React from 'react';
import Bubble from '../components/Other/Bubble';
import { Transition } from 'react-transition-group';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    const { show } = this.state;
    return (
      <div className="test">
        <button onClick={() => this.setState({ show: !show })}>
          Go
        </button>
        <Bubble show={show} />
      </div>
    );
  }
}

export default Test;
