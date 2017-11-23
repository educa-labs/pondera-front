import React from 'react';
import Loading from './Loading';

const LoadingWrapper = ({ loading, children, white }) => (
  loading ? <Loading white={white} /> : children()
);

export default LoadingWrapper;
