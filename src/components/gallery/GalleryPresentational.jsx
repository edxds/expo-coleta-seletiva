import React from 'react';
import PropTypes from 'prop-types';

import GalleryPhotoContent, { photoShape } from './GalleryPhotoContent';
import GalleryVideoContent, { videoShape } from './GalleryVideoContent';

import './styles/gallery.scss';

const GalleryPresentational = ({
  photos,
  videos,
  handleVideoClick,
  renderVideoOverlay,
}) => (
  <div className="gallery">
    {renderVideoOverlay()}
    <h1 className="gallery-title">Galeria</h1>
    <section id="gallery-photos">
      <div className="gallery-section-title-container">
        <p className="gallery-section-title">Fotos</p>
      </div>

      <GalleryPhotoContent photos={photos} />
    </section>
    <section id="gallery-videos">
      <div className="gallery-section-title-container">
        <p className="gallery-section-title">Vídeos</p>
      </div>

      <GalleryVideoContent
        videos={videos}
        handleVideoClick={handleVideoClick}
      />
    </section>
  </div>
);

GalleryPresentational.propTypes = {
  photos: PropTypes.arrayOf(photoShape).isRequired,
  videos: PropTypes.arrayOf(videoShape).isRequired,
  handleVideoClick: PropTypes.func.isRequired,
  renderVideoOverlay: PropTypes.func.isRequired,
};

export default GalleryPresentational;
