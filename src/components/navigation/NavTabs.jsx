import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as RecyclingIcon } from '../../assets/icons/recycling-icon.svg';
import { ReactComponent as GalleryIcon } from '../../assets/icons/gallery-icon.svg';

import './styles/nav-tabs.scss';

const NavTab = ({ children, className, isSelected, id, to, ...props }) => (
  <Link
    to={to}
    className={`nav-tab ${isSelected(id) ? 'selected' : ''}`}
    {...props}
  >
    {children}
    <div className="selected-indicator" />
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
    return (
      <div className="nav-tabs-container">
        <NavTab to="/" id="home" isSelected={this.isSelected}>
          <HomeIcon className="icon" />
          <p className="tab-title">Início</p>
        </NavTab>
        <NavTab to="/processo" id="process" isSelected={this.isSelected}>
          <RecyclingIcon className="icon" />
          <p className="tab-title">Como Funciona</p>
        </NavTab>
        <NavTab to="/galeria" id="gallery" isSelected={this.isSelected}>
          <GalleryIcon className="icon" />
          <p className="tab-title">Galeria</p>
        </NavTab>
      </div>
    );
  }
}

export default NavTabs;
export { NavTab };
