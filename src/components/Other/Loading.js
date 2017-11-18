import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../assets/svg/spinner.svg';

const Loading = ({ size }) => (
  <div className="loading-wrapper">
    <Spinner width={size} height={size} />
  </div>
);

Loading.defaultProps = {
  size: 30,
};

Loading.propTypes = {
  size: PropTypes.number,
};

export default Loading;
