import React from 'react';

import LogoSvg from '../../assets/logo/unified-logo.svg';
import './styles/logo.scss';

const Logo = () => (
  <div className="logo-container">
    <img className="logo" src={LogoSvg} alt="Logotipo do projeto" />
    <h1 className="title">Coleta Seletiva Solidária</h1>
    <h3 className="subtitle">CEFET/RJ</h3>
  </div>
);

export default Logo;