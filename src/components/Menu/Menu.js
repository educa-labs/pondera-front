import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TransitionMotion, spring } from 'react-motion';
import DropdownItem from 'muicss/lib/react/dropdown-item';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.onOutsideClick = this.onOutsideClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.onOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick);
  }

  onOutsideClick(ev) {
    if (this.button !== ev.target && !this.button.contains(ev.target)) {
      this.setState({
        open: false,
      });
    }
  }

  onClick(ev) {
    ev.stopPropagation();
    this.setState({ open: true });
  }


  render() {
    const { children } = this.props;
    const { open } = this.state;
    const className = 'menu-items mui-dropdown__menu mui-dropdown__menu--right';
    return (
      <div className="mui-dropdown">
        <button onClick={this.onClick} ref={(ref) => { this.button = ref; }}>
          <i className="material-icons">more_vert</i>
        </button>
        <ReactCSSTransitionGroup
          transitionName="menu"
          transitionEnterTimeout={150}
          transitionLeaveTimeout={200}
        >
          {open ? (
            <ul className={className}>
              {this.props.children}
            </ul>
          ) : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Menu;
