import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ size, white }) => (
  <div className="loading-wrapper">
    <svg className="spinner" width={`${size}px`} height={`${size}px`} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle className={`path ${white ? 'path-white' : '' }`} fill="none" strokeLinecap="round" cx="33" cy="33" r="30" />
    </svg>
  </div>
);

Loading.defaultProps = {
  size: 30,
  white: false,
};

Loading.propTypes = {
  size: PropTypes.number,
  white: PropTypes.bool,
};

export default Loading;
