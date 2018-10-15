import React from 'react';
import PropTypes from 'prop-types';

import GalleryPhotoItem from './GalleryPhotoItem';
import './styles/gallery-photos.scss';

const GalleryPhotoContent = ({ photos, onPhotoClick }) => {
  const isPhotosEmpty = !photos || photos.length === 0;

  return (
    <div
      className={`gallery-section-content ${
        isPhotosEmpty ? 'empty' : ''
      } images`}
    >
      {isPhotosEmpty && <p>Nenhuma foto disponível</p>}
      {!isPhotosEmpty &&
        photos.map((photo, index) => (
          <GalleryPhotoItem
            key={photo}
            url={photo}
            index={index}
            onClick={onPhotoClick}
          />
        ))}
      {!isPhotosEmpty && <div className="last-content" />}
    </div>
  );
};

GalleryPhotoContent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GalleryPhotoContent;
