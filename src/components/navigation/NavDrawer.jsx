import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as RecyclingIcon } from '../../assets/icons/recycling-icon.svg';
import { ReactComponent as GalleryIcon } from '../../assets/icons/gallery-icon.svg';

import styles from './styles/nav-drawer.module.scss';

const NavDrawerItem = ({ id, href, selected, onClick, children }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <li
      className={`${styles.itemContainer} ${selected ? styles.selected : ''}`}
      id={`drawer-item-${id}`}
    >
      <Link to={href} onClick={handleClick} className={styles.item}>
        {children}
      </Link>
    </li>
  );
};

NavDrawerItem.propTypes = {
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

class NavDrawer extends React.Component {
  state = {
    selectedId: 'home',
  };

  componentDidUpdate(prevProps) {
    const { pathname } = window.location;
    const id = this.getIdForLocation(pathname);

    const { selectedId } = this.state;
    if (id !== selectedId && !prevProps.visible) {
      this.setState({ selectedId: id }); // eslint-disable-line
    }
  }

  getVisibility = (className, condition) =>
    `${className} ${condition ? styles.visible : ''}`;

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

  handleClick = id => {
    this.setState({ selectedId: id });

    setTimeout(() => {
      const { onDismiss } = this.props;
      onDismiss();
    }, 200);
  };

  render() {
    const { selectedId } = this.state;
    const { visible, onDismiss } = this.props;

    return (
      <React.Fragment>
        <nav className={this.getVisibility(styles.drawer, visible)}>
          <ul className={styles.itemsContainer}>
            <NavDrawerItem
              href="/"
              id="home"
              selected={selectedId === 'home'}
              onClick={this.handleClick}
            >
              <HomeIcon />
              <span className={styles.title}>Início</span>
            </NavDrawerItem>
            <NavDrawerItem
              href="/processo"
              id="process"
              selected={selectedId === 'process'}
              onClick={this.handleClick}
            >
              <RecyclingIcon style={{ marginTop: 4 }} />
              <span className={styles.title}>O Processo</span>
            </NavDrawerItem>
            <NavDrawerItem
              href="/galeria"
              id="gallery"
              selected={selectedId === 'gallery'}
              onClick={this.handleClick}
            >
              <GalleryIcon />
              <span className={styles.title}>Galeria</span>
            </NavDrawerItem>
          </ul>
        </nav>
        <div
          className={this.getVisibility(styles.backdrop, visible)}
          onClick={visible ? onDismiss : undefined}
          aria-hidden
        />
      </React.Fragment>
    );
  }
}

NavDrawer.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func.isRequired,
};

NavDrawer.defaultProps = {
  visible: false,
};

export default NavDrawer;
