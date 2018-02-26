import React, { Component } from 'react';


/**
 * HOC for dynamic import
 * @param {Function} importComponent 
 */
export default function lazyComponent(importComponent) {
  class LazyComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return LazyComponent;
}

