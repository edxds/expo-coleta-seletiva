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

  handleMainButtonClick = ev => {
    const to = document.querySelector('#section-a').offsetTop;

    const { target } = ev;
    const computedStyle = window.getComputedStyle(target);
    const opacity = parseInt(computedStyle.opacity, 10);
    const isVisible = opacity >= 0.8;

    if (isVisible) {
      window.scrollTo({ top: to, behavior: 'smooth' });
    }
  };

  handleDrawerVisible = visibility => {
    this.setState({ isDrawerVisible: visibility });
  };

  handleProcessPercentages = progress => {
    this.setState({ progress });
  };

  render() {
    const { morph, progress, isDrawerVisible } = this.state;

    return (
      <div className="app" style={{ overflow: isDrawerVisible && 'hidden' }}>
        <Navigation />
        <SharedElement
          renderFrom={style => (
            <ProcessButton style={style} onClick={this.handleMainButtonClick} />
          )}
          renderTo={style => <ProgressBar style={style} progress={progress} />}
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