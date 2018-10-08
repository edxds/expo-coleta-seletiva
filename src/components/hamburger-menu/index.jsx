import React from 'react';
import PropTypes from 'prop-types';

import HamburgerIcon from '../../assets/icons/hamburger-icon.svg';

import './hamburger.scss';

const HamburgerMenu = ({ onClick, showBackground }) => (
  <button
    type="button"
    className={`hamburger-menu ${showBackground ? 'show-bg' : ''}`}
    onClick={onClick}
  >
    <img src={HamburgerIcon} alt="Menu" />
    <div className="bg" />
  </button>
);

HamburgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  showBackground: PropTypes.bool,
};

HamburgerMenu.defaultProps = {
  showBackground: false,
};

export default HamburgerMenu;
