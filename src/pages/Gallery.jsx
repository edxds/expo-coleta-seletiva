import React from 'react';
import PropTypes from 'prop-types';

import { connectToTheme } from '../components/context';

import GalleryPresentational from '../components/gallery';
import data from '../components/gallery/data';

class Gallery extends React.Component {
  static propTypes = {
    changeTheme: PropTypes.func.isRequired,
  };

  state = {
    ...data,
    showVideo: false,
  };

  componentDidMount() {
    const { changeTheme } = this.props;
    changeTheme('dark');

    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleVideoClick = () => {
    this.setState({ showVideo: true });
  };

  handleVideoDismiss = () => {
    this.setState({ showVideo: false });
  };

  getDimensionsForIframe = () => {
    const { clientHeight, clientWidth } = document.documentElement;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const occupyPercentage = isDesktop ? 0.8 : 0.95;

    const height = clientHeight * occupyPercentage;
    const width = height * 1.77777778;

    if (width > clientWidth * occupyPercentage) {
      const nWidth = clientWidth * occupyPercentage;
      const nHeight = nWidth * 0.5625;

      return { height: nHeight, width: nWidth };
    }

    return { height, width };
  };

  handleWindowResize = () => {
    const target = document.querySelector('.gallery-video-overlay iframe');
    if (!target) return;

    const { height, width } = this.getDimensionsForIframe();
    target.height = height;
    target.width = width;
  };

  renderVideoOverlay = () => {
    const { showVideo } = this.state;
    if (!showVideo) {
      return null;
    }

    const { height, width } = this.getDimensionsForIframe();
    const iframeOptions = {
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Never gonna give you up!
      height,
      width,
      frameBorder: '0',
      allow: 'autoplay; encrypted-media',
      allowFullScreen: true,
    };

    return (
      <div
        className="gallery-video-overlay"
        onClick={this.handleVideoDismiss}
        aria-hidden
      >
        <iframe title="Vídeo" {...iframeOptions} />
      </div>
    );
  };

  render() {
    const { photos, videos } = this.state;

    return (
      <GalleryPresentational
        photos={photos}
        videos={videos}
        handleVideoClick={this.handleVideoClick}
        renderVideoOverlay={this.renderVideoOverlay}
      />
    );
  }
}

export default connectToTheme(Gallery);
