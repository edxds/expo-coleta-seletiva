import React from 'react';

import LogoSvg from '../../assets/logo/unified-logo.svg';
// import './styles/logo.scss';
import styles from './styles/logo.module.scss';

const Logo = () => (
  <div className={styles.container}>
    <div className={styles.svgContainer}>
      <img className={styles.logo} src={LogoSvg} alt="Logotipo do projeto" />
      <div className={styles.shadow} />
    </div>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Coleta Seletiva Solidária</h1>
      <h3 className={styles.subtitle}>CEFET/RJ</h3>
    </div>
  </div>
);

export default Logo;
