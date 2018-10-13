import React from 'react';

import Logo from './Logo';
import './styles/landing.scss';

const Landing = props => (
  <div id="landing" {...props}>
    <Logo />
  </div>
);

export default Landing;
