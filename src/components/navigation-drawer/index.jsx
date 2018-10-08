import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as RecyclingIcon } from '../../assets/icons/recycling-icon.svg';
import { ReactComponent as GalleryIcon } from '../../assets/icons/gallery-icon.svg';

import './nav-drawer.scss';

class NavDrawer extends React.Component {
  getVisibility = (className, condition) =>
    `${className} ${condition ? 'visible' : ''}`;

  render() {
    const { visible, onDismiss } = this.props;

    return [
      <nav className={this.getVisibility('nav-drawer', visible)}>
        <ul className="nav-items">
          <li className="nav-item selected">
            <HomeIcon />
            <span className="nav-item-title">Início</span>
          </li>
          <li className="nav-item">
            <RecyclingIcon style={{ marginTop: 4 }} />
            <span className="nav-item-title">O Processo</span>
          </li>
          <li className="nav-item">
            <GalleryIcon />
            <span className="nav-item-title">Galeria</span>
          </li>
        </ul>
      </nav>,
      <div
        className={this.getVisibility('nav-backdrop', visible)}
        onClick={visible ? onDismiss : undefined}
        style={{ pointerEvents: !visible && 'none' }}
        onTransitionEnd={this.hideBackdrop}
        aria-hidden
      />,
    ];
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