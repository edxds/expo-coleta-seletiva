import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as DrawerIcon } from '../../assets/icons/drawer-icon.svg';

const HamburgerMenu = ({ onClick }) => (
  <button type="button" className="drawer-button" onClick={onClick}>
    <DrawerIcon />
    <div className="bg" />
  </button>
);

HamburgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HamburgerMenu;
