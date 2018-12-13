import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as DrawerIcon } from '../../assets/icons/drawer-icon.svg';
import styles from './styles/nav-hamburger.module.scss';

const DrawerButton = ({ onClick, theme }) => {
  const classNameForTheme = {
    regular: styles.regular,
    elevated: styles.elevated,
    dark: styles.dark,
  };

  return (
    <button
      type="button"
      className={`${styles.container} ${classNameForTheme[theme]}`}
      onClick={onClick}
    >
      <DrawerIcon className={styles.hamburgerIcon} />
    </button>
  );
};

DrawerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

DrawerButton.defaultProps = {
  theme: 'elevated',
};

export default DrawerButton;
