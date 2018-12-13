import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as RecyclingIcon } from '../../assets/icons/recycling-icon.svg';
import { ReactComponent as GalleryIcon } from '../../assets/icons/gallery-icon.svg';

import styles from './styles/nav-tabs.module.scss';

const NavTab = ({ children, className, isSelected, id, to, ...props }) => (
  <Link
    to={to}
    className={`${styles.tab} ${isSelected(id) ? styles.selected : ''}`}
    {...props}
  >
    {children}
    <div className={styles.indicator} />
  </Link>
);

class NavTabs extends React.Component {
  state = {
    selectedId: 'home',
  };

  componentDidUpdate() {
    const { pathname } = window.location;
    const id = this.getIdForLocation(pathname);

    if (this.state.selectedId !== id) {
      this.setState({ selectedId: id });
    }
  }

  getIdForLocation = location => {
    switch (location) {
      case '/':
        return 'home';
      case '/processo':
        return 'process';
      case '/galeria':
        return 'gallery';
      default:
        return '';
    }
  };

  isSelected = id => this.state.selectedId === id;

  render() {
    const { theme } = this.props;
    const classNameForTheme = {
      regular: '',
      elevated: '',
      dark: styles.dark,
    };

    return (
      <div className={`${styles.container} ${classNameForTheme[theme]}`}>
        <NavTab to="/" id="home" isSelected={this.isSelected}>
          <HomeIcon className={styles.icon} />
          <p className={styles.title}>Início</p>
        </NavTab>
        <NavTab to="/processo" id="process" isSelected={this.isSelected}>
          <RecyclingIcon className={styles.icon} />
          <p className={styles.title}>Como Funciona</p>
        </NavTab>
        <NavTab to="/galeria" id="gallery" isSelected={this.isSelected}>
          <GalleryIcon className={styles.icon} />
          <p className={styles.title}>Galeria</p>
        </NavTab>
      </div>
    );
  }
}

NavTabs.propTypes = {
  theme: PropTypes.string,
};

NavTabs.defaultProps = {
  theme: 'regular',
};

export default NavTabs;
export { NavTab };
