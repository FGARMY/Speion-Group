import React from 'react';
import Logo from './Logo';

const LoadingScreen = () => {
  return (
    <div className="global-loader">
      <div className="loader-inner">
        <Logo className="loader-logo" />
        <div className="loader-ring"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
