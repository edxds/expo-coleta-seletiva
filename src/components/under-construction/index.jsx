import React from 'react';

import CraneIcon from '../../assets/icons/sts-crane-icon.png';
import './under-construction.scss';
import { connectToTheme } from '../context';

const UnderConstruction = ({ changeTheme }) => {
  changeTheme('dark');

  return (
    <div className="under-construction">
      <img src={CraneIcon} alt="" />
      <h2>Em Construção</h2>
    </div>
  );
};

export default connectToTheme(UnderConstruction);
