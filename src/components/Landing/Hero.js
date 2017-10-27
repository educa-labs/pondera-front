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
    <div className="hero-title mui--text-title">Y participa por un auto 0km.</div>
  </section>
);

export default Hero;
