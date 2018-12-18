import React from 'react';
import PropTypes from 'prop-types';

import { connectToTheme } from '../context';

import DrawerButton from './DrawerButton';
import NavDrawer from './NavDrawer';
import NavSidebar from './NavSidebar';

// import './styles/navigation.scss';
import styles from './styles/navigation.module.scss';

class Navigation extends React.Component {
  static propTypes = {
    currentTheme: PropTypes.string,
  };

  static defaultProps = {
    currentTheme: 'regular',
  };

  state = {
    drawerVisible: false,
    scrolledBeyondThreshold: false,
    isDesktop: true,
  };

  canScroll = true;

  componentDidMount() {
    document.addEventListener('touchmove', this.handleTouchMove);
    document.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);

    // decidir se mostra nav mobile ou desktop
    this.handleResize();
  }

  componentWillUnmount() {
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
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

  handleResize = () => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (this.state.isDesktop !== isDesktop) {
      this.setState({ isDesktop });
    }
  };

  render() {
    const { currentTheme } = this.props;
    const { drawerVisible, isDesktop } = this.state;

    return (
      <div className={styles.container}>
        {isDesktop ? (
          <NavSidebar />
        ) : (
          <React.Fragment>
            <DrawerButton
              theme={currentTheme}
              onClick={this.onHamburgerClick}
            />
            <NavDrawer
              visible={drawerVisible}
              onDismiss={this.onDrawerDismiss}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default connectToTheme(Navigation);
