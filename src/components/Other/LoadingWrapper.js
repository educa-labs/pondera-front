import React from 'react';
import Loading from './Loading';

const LoadingWrapper = ({ loading, children }) => (
  loading ? <Loading /> : children()
);

export default LoadingWrapper;
