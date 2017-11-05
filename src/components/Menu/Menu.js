import React, { Component } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';

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
    console.log('Hola');
    this.setState({ open: true });
  }


  render() {
    const { children } = this.props;
    const { open } = this.state;
    const className = 'mui-dropdown__menu mui-dropdown__menu--right';
    return (
      <div className="mui-dropdown">
        <button className="icon-button" onClick={this.onClick} ref={(ref) => { this.button = ref; }}>
          <i className="material-icons">more_vert</i>
        </button>
        <Transition
          classNames="menu"
          timeout={500}
          in={open}
        >
          {status => (
            <ul className={`menu menu-${status} ${className}`}>
              {this.props.children}
            </ul>
          )}
        </Transition>
      </div>
    );
  }
}

export default Menu;
