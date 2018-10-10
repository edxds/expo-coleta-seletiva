import React from 'react';

import CraneIcon from '../../assets/icons/sts-crane-icon.png';
import './under-construction.scss';

const UnderConstruction = () => (
  <div className="under-construction">
    <img src={CraneIcon} alt="" />
    <h2>Em Construção</h2>
  </div>
);

export default UnderConstruction;
