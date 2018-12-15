import React from 'react';
import PropTypes from 'prop-types';

import GalleryPhotoItem from './GalleryPhotoItem';
import styles from './styles/gallery-photos.module.scss';

const GalleryPhotoContent = ({ photos, onPhotoClick }) => {
  const isPhotosEmpty = !photos || photos.length === 0;

  return (
    <div
      className={`${styles.photosSection} ${isPhotosEmpty ? styles.empty : ''}`}
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
    </div>
  );
};

GalleryPhotoContent.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GalleryPhotoContent;
