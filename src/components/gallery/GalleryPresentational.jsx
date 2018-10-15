// TODO: Refactor

import React from 'react';
import PropTypes from 'prop-types';

import Lightbox from 'react-images';

import GalleryPhotoContent from './GalleryPhotoContent';
import GalleryVideoContent, { videoShape } from './GalleryVideoContent';

import './styles/gallery.scss';

const GalleryPresentational = ({
  photos,
  videos,
  selectedPhoto,
  handleVideoClick,
  handlePhotoClick,
  renderVideoOverlay,
  isPhotoGalleryOpen,
  handlePhotoGalleryClose,
  handlePhotoGalleryPrev,
  handlePhotoGalleryNext,
}) => {
  const photoUrls = photos.map(photo => ({
    src: photo,
  }));

  return (
    <div className="gallery">
      {renderVideoOverlay()}
      <Lightbox
        images={photoUrls}
        isOpen={isPhotoGalleryOpen}
        onClose={handlePhotoGalleryClose}
        onClickPrev={handlePhotoGalleryPrev}
        onClickNext={handlePhotoGalleryNext}
        currentImage={selectedPhoto}
        imageCountSeparator=" de "
        backdropClosesModal
      />
      <h1 className="gallery-title">Galeria</h1>
      <section id="gallery-photos">
        <div className="gallery-section-title-container">
          <p className="gallery-section-title">Fotos</p>
        </div>

        <GalleryPhotoContent photos={photos} onPhotoClick={handlePhotoClick} />
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
};

GalleryPresentational.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
  videos: PropTypes.arrayOf(videoShape),
  selectedPhoto: PropTypes.number.isRequired,
  handlePhotoClick: PropTypes.func.isRequired,
  handlePhotoGalleryClose: PropTypes.func.isRequired,
  handlePhotoGalleryPrev: PropTypes.func.isRequired,
  handlePhotoGalleryNext: PropTypes.func.isRequired,
  isPhotoGalleryOpen: PropTypes.bool.isRequired,
  handleVideoClick: PropTypes.func.isRequired,
  renderVideoOverlay: PropTypes.func.isRequired,
};

GalleryPresentational.defaultProps = {
  photos: [],
  videos: [],
};

export default GalleryPresentational;
