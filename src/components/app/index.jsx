import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main';
import Process from '../process';
import ProgressBar from '../process/progress-bar';
import ProcessButton from '../main/process-button';
import SharedElement from '../shared-element';

import './app.scss';

export default class App extends React.Component {
  static propTypes = {
    startOnProcess: PropTypes.bool,
  };

  static defaultProps = {
    startOnProcess: false,
  };

  state = {
    morph: false,
    isDrawerVisible: false,
    progress: { a: 0, b: 0, c: 0 },
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    const { startOnProcess } = this.props;
    if (startOnProcess) {
      this.scrollToElement('.progress-container', 0);
    }
  }

  componentDidUpdate() {
    const { startOnProcess } = this.props;
    const scrollPercentage = this.getScrollPercentage();

    if (startOnProcess && scrollPercentage < 0.9) {
      this.scrollToElement('.progress-container', 0);
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
    const windowHeight = document.documentElement.clientHeight;
    const { scrollY } = window;

    const scrollPercent = scrollY / windowHeight;
    const shouldMorph = scrollPercent >= 0.2;

    const { morph } = this.state;
    if (morph !== shouldMorph) {
      this.setState({ morph: shouldMorph });
    }

    const { history } = this.props;
    const { pathname } = history.location;

    if (scrollPercent >= 1 && pathname === '/') {
      history.push('/processo');
    } else if (scrollPercent <= 0.9 && pathname === '/processo') {
      history.push('/');
    }
  };

  scrollToElement = (selector, offset) => {
    const to = document.querySelector(selector).offsetTop;
    window.scrollTo({ top: to + offset, behavior: 'smooth' });
  };

  handleMainButtonClick = ev => {
    const { target } = ev;
    const computedStyle = window.getComputedStyle(target);
    const opacity = parseInt(computedStyle.opacity, 10);
    const isVisible = opacity >= 0.8;

    if (isVisible) {
      this.scrollToElement('.progress-container', 0);
    }
  };

  handleDrawerVisible = visibility => {
    this.setState({ isDrawerVisible: visibility });
  };

  handleProcessPercentages = progress => {
    this.setState({ progress });
  };

  handleSectionClick = id => {
    this.scrollToElement(id, -43);
  };

  render() {
    const { morph, progress, isDrawerVisible } = this.state;

    return (
      <div className="app" style={{ overflow: isDrawerVisible && 'hidden' }}>
        <SharedElement
          renderFrom={style => (
            <ProcessButton style={style} onClick={this.handleMainButtonClick} />
          )}
          renderTo={style => (
            <ProgressBar
              style={style}
              progress={progress}
              handleClick={this.handleSectionClick}
            />
          )}
          fromStyle={{ borderRadius: 8 }}
          toStyle={{ borderRadius: 0 }}
          morph={morph}
        />

        <Main />
        <Process />
      </div>
    );
  }
}
