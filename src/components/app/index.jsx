import React from 'react';

import Navigation from '../navigation';
import Main from '../main';
import Process from '../process';
import ProgressBar from '../process/progress-bar';
import ProcessButton from '../main/process-button';
import SharedElement from '../shared-element';

import './app.scss';

export default class App extends React.Component {
  state = {
    morph: false,
    isDrawerVisible: false,
    progress: { a: 0, b: 0, c: 0 },
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const windowHeight = document.documentElement.clientHeight;
    const { scrollY } = window;

    const scrollPercent = scrollY / windowHeight;
    const shouldMorph = scrollPercent >= 0.2;

    const { morph } = this.state;
    if (morph !== shouldMorph) {
      this.setState({ morph: shouldMorph });
    }
  };

  scrollToElement = (selector, offset) => {
    const to = document.querySelector(selector).offsetTop;
    window.scrollTo({ top: to + offset, behavior: 'smooth' });
  }

  handleMainButtonClick = ev => {
    const to = document.querySelector('.progress-container').offsetTop;

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

  handleSectionClick = index => {
    switch (index) {
      case 0:
        this.scrollToElement('#section-a', -43);
        break;
      case 1:
        this.scrollToElement('#section-b', -43);
        break;
      case 2:
        this.scrollToElement('#section-c', -43);
        break;
      default:
        break;
    }
  }

  render() {
    const { morph, progress, isDrawerVisible } = this.state;

    return (
      <div className="app" style={{ overflow: isDrawerVisible && 'hidden' }}>
        <Navigation />
        <SharedElement
          renderFrom={style => (
            <ProcessButton style={style} onClick={this.handleMainButtonClick} />
          )}
          renderTo={style => <ProgressBar style={style} progress={progress} handleClick={this.handleSectionClick} />}
          fromStyle={{ borderRadius: 8 }}
          toStyle={{ borderRadius: 0 }}
          morph={morph}
        />

        <Main />
        <Process handlePercentages={this.handleProcessPercentages} />
      </div>
    );
  }
}
