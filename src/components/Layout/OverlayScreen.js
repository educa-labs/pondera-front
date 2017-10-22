import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { DraggableCore } from 'react-draggable';


class OverlayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posY: 0,
    };
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleStart(e, ui) {
    console.log('Start', ui.y);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      if (!nextProps.active) {
        this.setState({ posY: 0 });
      }
    }
  }

  handleDrag(e, ui) {
    const newValue = this.state.posY + ui.deltaY;
    if (newValue >= 0) {
      this.setState({ posY: newValue });
    }
  }

  render() {
    const { active, children } = this.props;
    const { posY} = this.state;
    return (
      <Motion style={{ y: spring(active ? 0 : 100) }}>
        {({ y }) => (
          <DraggableCore
            onStart={this.handleStart}
            onDrag={this.handleDrag}
          >
            <div
              ref={(ref) => { this.screen = ref; }}
              className="overlay-screen"
              style={{ transform: `translateY(calc(${y}vh + ${posY}px))` }}
            >
              {this.props.children}
            </div>
          </DraggableCore>
        )}
      </Motion>
    );
  }
}


OverlayScreen.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default OverlayScreen;

