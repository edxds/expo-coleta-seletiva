import React from 'react';

import Title from '../title';

import HamburgerIcon from '../../assets/icons/hamburger-icon.svg';
import './main.scss';

const Main = props => (
  <main {...props}>
    <button type="button" className="hamburger-menu">
      <img src={HamburgerIcon} alt="Menu" />
    </button>
    <Title />
  </main>
);

export default Main;
