import React from 'react';
import PropTypes from 'prop-types';

import { scrollToElement, getScrollPercentage } from '../lib/scroll';

import Landing from '../components/landing';
import Process from '../components/process';

class Home extends React.Component {
  static propTypes = {
    startOnProcess: PropTypes.bool,
  };

  static defaultProps = {
    startOnProcess: false,
  };

  state = {
    engagedInProcess: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.evaluateShowProcess();
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
    const { history } = this.props;
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

  handleShowProcess = () => {
    const { history } = this.props;
    history.push('/processo');
  };

  handleScroll = () => {
    const scrollPercentage = getScrollPercentage();
    this.handleHistoryByScroll(scrollPercentage);
    this.handleProcessEngagementByScroll(scrollPercentage);
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

export default Home;
