import React from 'react';
import PropTypes from 'prop-types';

import { connectToTheme } from '../components/context';
import { scrollToElement, getScrollPercentage } from '../lib/scroll';

import Landing from '../components/landing';
import Process from '../components/process';

class Home extends React.Component {
  static propTypes = {
    startOnProcess: PropTypes.bool,
    changeTheme: PropTypes.func,
  };

  static defaultProps = {
    startOnProcess: false,
    changeTheme: () => {},
  };

  state = {
    engagedInProcess: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.evaluateShowProcess();

    this.props.changeTheme('regular');
  }

  componentDidUpdate() {
    this.evaluateShowProcess();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  evaluateShowProcess = () => {
    const { startOnProcess } = this.props;
    const scrollPercentage = getScrollPercentage();

    if (startOnProcess && scrollPercentage < 0.9) {
      scrollToElement({ selector: '.process-container' });
    } else if (startOnProcess === false && scrollPercentage >= 1) {
      scrollToElement({ selector: '#home' });
    }
  };

  handleHistoryByScroll = scrollPercentage => {
    // TODO: Import react-router prop types
    const { history } = this.props; // eslint-disable-line react/prop-types
    const { pathname } = history.location;

    if (scrollPercentage >= 1 && pathname === '/') {
      history.push('/processo');
    } else if (scrollPercentage <= 0.9 && pathname === '/processo') {
      history.push('/');
    }
  };

  handleProcessEngagementByScroll = scrollPercentage => {
    const { engagedInProcess } = this.state;
    const threshold = 0.2;

    if (scrollPercentage > threshold && !engagedInProcess) {
      this.setState({ engagedInProcess: true });
    } else if (scrollPercentage < threshold && engagedInProcess) {
      this.setState({ engagedInProcess: false });
    }
  };

  handleNavThemeByScroll = scrollPercentage => {
    const { changeTheme } = this.props;
    const threshold = 0.8;

    const condition = scrollPercentage > threshold;
    changeTheme(condition ? 'elevated' : 'regular');
  };

  handleShowProcess = () => {
    const { history } = this.props;
    history.push('/processo');
  };

  handleScroll = () => {
    const scrollPercentage = getScrollPercentage();
    this.handleHistoryByScroll(scrollPercentage);
    this.handleProcessEngagementByScroll(scrollPercentage);
    this.handleNavThemeByScroll(scrollPercentage);
  };

  render() {
    const { startOnProcess } = this.props;
    const { engagedInProcess } = this.state;

    return (
      <div id="home">
        <Landing />
        <Process
          showProgressBar={startOnProcess}
          mergeHeader={engagedInProcess}
          handleGoToProcess={this.handleShowProcess}
        />
      </div>
    );
  }
}

export default connectToTheme(Home);
