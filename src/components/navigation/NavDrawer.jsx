import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as RecyclingIcon } from '../../assets/icons/recycling-icon.svg';
import { ReactComponent as GalleryIcon } from '../../assets/icons/gallery-icon.svg';

import './styles/nav-drawer.scss';

const NavDrawerItem = ({ id, href, selected, onClick, children }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <li
      className={`nav-item ${selected ? 'selected' : ''}`}
      id={`drawer-item-${id}`}
    >
      <Link to={href} onClick={handleClick}>
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
    `${className} ${condition ? 'visible' : ''}`;

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
        <nav className={this.getVisibility('nav-drawer', visible)}>
          <ul className="nav-items">
            <NavDrawerItem
              href="/"
              id="home"
              selected={selectedId === 'home'}
              onClick={this.handleClick}
            >
              <HomeIcon />
              <span className="nav-item-title">Início</span>
            </NavDrawerItem>
            <NavDrawerItem
              href="/processo"
              id="process"
              selected={selectedId === 'process'}
              onClick={this.handleClick}
            >
              <RecyclingIcon style={{ marginTop: 4 }} />
              <span className="nav-item-title">O Processo</span>
            </NavDrawerItem>
            <NavDrawerItem
              href="/galeria"
              id="gallery"
              selected={selectedId === 'gallery'}
              onClick={this.handleClick}
            >
              <GalleryIcon />
              <span className="nav-item-title">Galeria</span>
            </NavDrawerItem>
          </ul>
        </nav>
        <div
          className={this.getVisibility('nav-backdrop', visible)}
          onClick={visible ? onDismiss : undefined}
          style={{ pointerEvents: !visible ? 'none' : 'auto' }}
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
