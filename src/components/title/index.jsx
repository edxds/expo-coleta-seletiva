import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = ({ logoUrl }) => (
  <div className="title-container">
    <img className="logo" src={logoUrl} alt="Logotipo do Projeto" />
    <h1 className="title">Coleta Seletiva Solidária</h1>
    <h3 className="subtitle">CEFET/RJ</h3>
  </div>
);

Title.propTypes = {
  logoUrl: PropTypes.string.isRequired,
};

export default Title;
