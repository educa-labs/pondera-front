import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../assets/svg/spinner.svg';

const Loading = ({ size }) => (
  <Spinner width={size || 30} height={size || 30} />
);

Loading.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Loading;
