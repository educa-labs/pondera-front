import React from 'react';
import swift from '../../assets/images/swift.png';

const Hero = ({ frame }) => (
  <section id="hero-landing">
    <div className="from-left mui--text-display3">Pondera.</div>
    <div
      id="swift"
      className={frame === 1 ? 'from-right' : ''}
      style={frame === 1 ? { backgroundImage: `url(${swift})` } : null}
    />
  </section>
);

export default Hero;
