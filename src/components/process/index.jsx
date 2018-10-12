import React from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './progress-bar';

import { ReactComponent as ChevronUp } from '../../assets/icons/chevron-up.svg';
import './process.scss';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
  tristique dui. Phasellus eget pretium nibh. Ut luctus nulla risus, vel
  congue augue interdum a. Aliquam erat volutpat. Praesent nibh mauris,
  bibendum ac ex sed, viverra scelerisque odio. Etiam gravida efficitur
  libero, bibendum tincidunt nunc elementum eu. Cras sit amet nunc
  efficitur, mattis leo eget, ultrices elit. Curabitur commodo massa ut
  nisl rhoncus, ac molestie mi convallis. Donec molestie dignissim
  lacus, a auctor ante ullamcorper quis. In hac habitasse platea
  dictumst. 
  
  Morbi ultrices ultricies congue. In eget augue ut felis
  ultricies faucibus suscipit eget felis. Suspendisse sollicitudin
  euismod tortor, sed tristique leo. Mauris auctor, sem vel porta
  interdum, sem metus volutpat neque, in tempor justo nisl eget erat.
  Fusce scelerisque sapien placerat felis tincidunt, vitae semper massa
  egestas. Fusce metus purus, congue eu nisl et, bibendum mollis mauris.
  Suspendisse potenti. Mauris vel odio ut nibh venenatis tincidunt.
  Nulla vehicula pellentesque purus. In placerat vel eros ac ultricies.
  Nam lobortis auctor augue, quis viverra risus condimentum non. Donec
  quis risus leo. Nulla vitae ultricies orci. Praesent at metus tortor.
  Mauris scelerisque nulla mi, in facilisis ipsum posuere at. Nunc
  aliquam tincidunt sem.
  
  Pellentesque sed consequat eros, ac vulputate
  urna. Nulla ex dolor, suscipit eget sem eget, volutpat auctor eros.
  Nunc facilisis augue et metus tristique mollis. Proin convallis turpis
  nec aliquam placerat. Maecenas ullamcorper tortor nec ipsum dapibus,
  sit amet venenatis orci posuere. Maecenas sit amet nisi a velit
  iaculis ornare quis ut sem. Etiam id ultrices eros. Mauris pharetra
  iaculis sapien, nec ullamcorper arcu dapibus ut. Morbi suscipit
  tristique felis eget dignissim. Aliquam in semper odio. Integer ac
  mauris dui. Mauris lacinia tellus ut sapien tristique, id ornare justo
  volutpat. Phasellus interdum diam vitae fringilla lobortis. Etiam
  commodo in arcu id pellentesque. Vivamus risus eros, dapibus nec
  fringilla sed, pharetra eu enim. Curabitur eget lorem lacus. Sed
  pretium, ipsum in finibus pellentesque, lorem nulla lacinia est, sed
  lacinia ex orci eu lorem. Vivamus dictum turpis pharetra maximus
  fermentum.`;

class Process extends React.Component {
  static propTypes = {
    showProgressBar: PropTypes.bool,
    mergeHeader: PropTypes.bool,
    handleGoToProcess: PropTypes.func.isRequired,
  };

  static defaultProps = {
    showProgressBar: false,
    mergeHeader: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.sections = this.getSections();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getSections = () => ({
    sectionA: document.querySelector('#section-a'),
    sectionB: document.querySelector('#section-b'),
    sectionC: document.querySelector('#section-c'),
  });

  getExponentialPercentage = x => {
    const a = 5;
    return (a ** x - 1) / (a - 1);
  };

  getClampedPercentage = value => Math.min(Math.max(value, 0), 1);

  handleScroll = () => {
    const currentScroll = window.scrollY + (window.innerHeight - 88);

    const progressA =
      (currentScroll - this.sections.sectionA.offsetTop) /
      this.sections.sectionA.offsetHeight;
    const progressB =
      (currentScroll - this.sections.sectionB.offsetTop) /
      this.sections.sectionB.offsetHeight;
    const progressC =
      (currentScroll - this.sections.sectionC.offsetTop) /
      this.sections.sectionC.offsetHeight;

    const aExpo = this.getClampedPercentage(
      this.getExponentialPercentage(progressA)
    );
    const bExpo = this.getClampedPercentage(
      this.getExponentialPercentage(progressB)
    );
    const cExpo = this.getClampedPercentage(
      this.getExponentialPercentage(progressC)
    );

    const progresses = [
      document.querySelector('#progress-item-progress-a'),
      document.querySelector('#progress-item-progress-b'),
      document.querySelector('#progress-item-progress-c'),
    ];

    const icons = [
      document.querySelector('#progress-item-icon-a'),
      document.querySelector('#progress-item-icon-b'),
      document.querySelector('#progress-item-icon-c'),
    ];

    const aActive = aExpo > 0 && !bExpo;
    const bActive = bExpo > 0 && !cExpo;
    const cActive = cExpo > 0 && !bActive;

    // iOS doesn't like me setting style directly 🤔
    progresses[0].style.width = `${aExpo * 100}%`;
    progresses[1].style.width = `${bExpo * 100}%`;
    progresses[2].style.width = `${cExpo * 100}%`;

    icons[0].classList.toggle('active', aActive);
    icons[1].classList.toggle('active', bActive);
    icons[2].classList.toggle('active', cActive);
  };

  handleBarItemClick = id => {
    const to = document.querySelector(id).offsetTop;
    const drawerMenuOffset = 43;

    window.scrollTo({ top: to - drawerMenuOffset, behavior: 'smooth' });
  };

  render() {
    const {
      showProgressBar,
      mergeHeader,
      handleGoToProcess,
      ...passthrough
    } = this.props;

    return (
      <div className="process">
        <div
          className={`progress-bar-container ${showProgressBar ? 'show' : ''}`}
        >
          <ProgressBar handleClick={this.handleBarItemClick} />
        </div>
        <div className="process-scroll-cover" />
        <article className="process-container" {...passthrough}>
          <button
            className={`process-header ${mergeHeader ? 'merge' : ''}`}
            onClick={!mergeHeader ? handleGoToProcess : null}
            type="button"
          >
            <ChevronUp />
            <p>Como Funciona</p>
          </button>

          <section id="section-a">
            <h2>Geração</h2>
            <p>{lorem}</p>
          </section>

          <section id="section-b">
            <h2>Separação</h2>
            <p>{lorem}</p>
          </section>

          <section id="section-c">
            <h2>Coleta</h2>
            <p>{lorem}</p>
          </section>
        </article>
      </div>
    );
  }
}

export default Process;
