import React from 'react';

import HamburgerMenu from '../hamburger-menu';
import NavDrawer from '../navigation-drawer';

import './navigation.scss';

export default class Navigation extends React.Component {
  state = {
    drawerVisible: false,
    scrolledBeyondThreshold: false,
  };

  canScroll = true;

  componentDidMount() {
    document.addEventListener('touchmove', this.handleTouchMove);
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('scroll', this.handleScroll);
  }

  onHamburgerClick = () => {
    this.setState({ drawerVisible: true });
    this.setScroll(false);
  };

  onDrawerDismiss = () => {
    this.setState({ drawerVisible: false });
    this.setScroll(true);
  };

  setScroll = canScroll => {
    this.canScroll = canScroll;
    document.body.classList.toggle('lock', !canScroll);
  };

  handleTouchMove = ev => {
    if (!this.canScroll) {
      ev.preventDefault();

      return false;
    }

    return true;
  };

  handleScroll = () => {
    const windowHeight = document.documentElement.clientHeight;
    const { scrollY } = window;

    const scrollPercent = scrollY / windowHeight;
    const hasScrolledBeyondThreshold = scrollPercent > 0.5;
    const { scrolledBeyondThreshold } = this.state;
    if (scrolledBeyondThreshold !== hasScrolledBeyondThreshold) {
      this.setState({ scrolledBeyondThreshold: hasScrolledBeyondThreshold });
    }
  };

  render() {
    const { drawerVisible, scrolledBeyondThreshold } = this.state;

    return (
      <div className="nav-elements">
        <HamburgerMenu
          onClick={this.onHamburgerClick}
          showBackground={scrolledBeyondThreshold}
        />
        <NavDrawer visible={drawerVisible} onDismiss={this.onDrawerDismiss} />
      </div>
    );
  }
}
