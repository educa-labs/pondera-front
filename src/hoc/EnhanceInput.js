import React from 'react';


const Input = (Component) => {
  return class InputWrapper extends React.Component {
    render() {
      const { errorText, setRef, ...rest } = this.props;
      return ([
        <Component
          key="0"
          ref={setRef}
          className="mui-textfield--with-error"
          invalid={errorText}
          {...rest}
        />,
        <div key="1" className="mui-textfield--error-text">{errorText}</div>,
      ]);
    }
  };
};

export default Input;
