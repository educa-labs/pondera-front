import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { DraggableCore } from 'react-draggable';


class ScrollScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posY: 0,
      innerHeight: window.innerHeight,
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.index !== nextProps.index) {
      this.setState({ posY: 0 });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (this.state.innerHeight < window.innerHeight) {
      this.setState({ innerHeight: window.innerHeight });
    }
  }

  handleDrag(e, ui) {
    const newValue = this.state.posY + ui.deltaY;
    if (this.props.index === 1) {
      if (newValue >= 0) {
        this.setState({ posY: newValue });
      }
      if (newValue >= 60) {
        this.props.goBack();
      }
    }
  }


  render() {
    const { index } = this.props;
    const { posY, innerHeight } = this.state;
    return (
      <div className="screen-wrapper">
        <Motion style={{ y: spring((innerHeight * index) - posY) }}>
          {({ y }) => (
            <DraggableCore
              onStart={this.handleStart}
              onDrag={this.handleDrag}
            >
              <div className="scroll-screen" style={{ transform: `translateY(${-y}px)` }}>
                {this.props.children[0]}
                {this.props.children[1]}
              </div>
            </DraggableCore>
          )}
        </Motion>
      </div>
    );
  }
}

export default ScrollScreen;
