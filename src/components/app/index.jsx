import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main';
import Process from '../process';

import './app.scss';

export default class App extends React.Component {
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

    const { startOnProcess } = this.props;
    if (startOnProcess) {
      this.scrollToElement('.process-container', 0);
    }
  }

  componentDidUpdate() {
    const { startOnProcess } = this.props;
    const scrollPercentage = this.getScrollPercentage();

    if (startOnProcess && scrollPercentage < 0.9) {
      this.scrollToElement('.process-container', 0);
    } else if (startOnProcess === false && scrollPercentage >= 1) {
      this.scrollToElement('.app', 0);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getScrollPercentage = () => {
    const windowHeight = document.documentElement.clientHeight;
    const { scrollY } = window;

    return scrollY / windowHeight;
  };

  handleScroll = () => {
    const scrollHeight = document.documentElement.clientHeight - 64;
    const { scrollY } = window;

    const scrollPercent = scrollY / scrollHeight;

    this.handleHistoryByScroll(scrollPercent);
    this.handleProcessEngagementByScroll(scrollPercent);
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
    if (scrollPercentage > 0.5 && !engagedInProcess) {
      this.setState({ engagedInProcess: true });
    } else if (scrollPercentage < 0.5 && engagedInProcess) {
      this.setState({ engagedInProcess: false });
    }
  };

  scrollToElement = (selector, offset) => {
    const to = document.querySelector(selector).offsetTop;
    window.scrollTo({ top: to + offset, behavior: 'smooth' });
  };

  handleShowProcess = () => {
    const { history } = this.props;
    history.push('/processo');
  };

  render() {
    const { startOnProcess } = this.props;
    const { engagedInProcess } = this.state;

    return (
      <div className="app">
        <Main />
        <Process
          showProgressBar={startOnProcess}
          mergeHeader={engagedInProcess}
          handleGoToProcess={this.handleShowProcess}
        />
      </div>
    );
  }
}
