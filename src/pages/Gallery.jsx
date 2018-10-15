import React from 'react';
import PropTypes from 'prop-types';

import GalleryPresentational from '../components/gallery';

import { connectToTheme } from '../components/context';
import randomizeArray from '../lib/random';
import photos from '../assets/photo-data';

class Gallery extends React.Component {
  static propTypes = {
    changeTheme: PropTypes.func.isRequired,
  };

  state = {
    showVideo: false,
    showPhoto: false,
    galleryPhotoIndex: 0,
  };

  randomizedPhotos = randomizeArray(photos);

  videos = [
    { url: 'https://i.ytimg.com/vi_webp/0m76xmNcs1Q/maxresdefault.webp' },
  ];

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

  handlePhotoClick = index => {
    this.setState({ showPhoto: true, galleryPhotoIndex: index });
  };

  handlePhotoGalleryClose = () => {
    this.setState({ showPhoto: false });
  };

  handlePhotoGalleryPrev = () => {
    const { galleryPhotoIndex } = this.state;
    this.setState({ galleryPhotoIndex: galleryPhotoIndex - 1 });
  };

  handlePhotoGalleryNext = () => {
    const { galleryPhotoIndex } = this.state;
    this.setState({ galleryPhotoIndex: galleryPhotoIndex + 1 });
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
      src: 'https://www.youtube.com/embed/0m76xmNcs1Q', // Never gonna give you up!
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
    const { showPhoto, galleryPhotoIndex } = this.state;

    return (
      <GalleryPresentational
        photos={this.randomizedPhotos}
        videos={this.videos}
        handleVideoClick={this.handleVideoClick}
        handlePhotoClick={this.handlePhotoClick}
        handlePhotoGalleryClose={this.handlePhotoGalleryClose}
        handlePhotoGalleryNext={this.handlePhotoGalleryNext}
        handlePhotoGalleryPrev={this.handlePhotoGalleryPrev}
        selectedPhoto={galleryPhotoIndex}
        renderVideoOverlay={this.renderVideoOverlay}
        isPhotoGalleryOpen={showPhoto}
      />
    );
  }
}

export default connectToTheme(Gallery);
