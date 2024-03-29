import React from 'react';
import PropTypes from 'prop-types';

/* Add errror text label */
const Input = (Component) => {
  class InputWrapper extends React.Component {
    render() {
      const {
        errorText, hintText, setRef, correct, ...rest
      } = this.props;
      const cls = `mui-textfield--with-error ${correct ? 'textfield-correct' : ''} ${errorText ? 'textfield-invalid' : ''}`;
      return ([
        <Component
          key="0"
          ref={setRef}
          className={cls}
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
