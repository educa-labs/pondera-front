import React from 'react';
import Loading from './Loading';
import Spinner from './Spinner';

const LoadingWrapper = ({ loading, children, white }) => (
  loading ? (
    <div className="loading-wrapper">
      <Spinner white={white} />
    </div>
  ) : children()
);

export default LoadingWrapper;
