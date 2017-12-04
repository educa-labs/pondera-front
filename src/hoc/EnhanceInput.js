import React from 'react';
import PropTypes from 'prop-types';


const Input = (Component) => {
  class InputWrapper extends React.Component {
    render() {
      const {
        errorText, hintText, setRef, correct, ...rest
      } = this.props;
      return ([
        <Component
          key="0"
          ref={setRef}
          className={`mui-textfield--with-error ${correct && 'textfield-correct'}`}
          invalid={errorText}
          {...rest}
        />,
        errorText ? (
          <div key="2" className="mui-textfield--error-text">{errorText}</div>
        ) : (
          <div key="1" className="mui-textfield--hint-text">{hintText}</div>
        ),
      ]);
    }
  }
  InputWrapper.propTypes = {
    errorText: PropTypes.string,
    hintText: PropTypes.string,
    setRef: PropTypes.func,
    correct: PropTypes.bool,
  };

  InputWrapper.defaultProps = {
    errorText: null,
    hintText: null,
    setRef: null,
    correct: false,
  };

  return InputWrapper;
};

export default Input;
