import React from 'react';
// import swift from '../../assets/images/swift.png';

const Hero = ({ frame }) => (
  <section id="hero-landing">
    <div className="from-left">Pondera.</div>
    <div
      id="swift"
      className={frame && 'from-right'}
      style={frame ? { backgroundImage: 'url(/images/pondera.png)' } : null}
    />
    <div className="hero-title mui--text-title">
      Y participa por un nuevo <strong>IPhone X</strong> y uno de los dos <strong>Galaxy S8</strong>
    </div>
  </section>
);

export default Hero;
