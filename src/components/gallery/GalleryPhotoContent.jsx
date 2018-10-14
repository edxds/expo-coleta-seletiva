import React from 'react';
import PropTypes from 'prop-types';

import GalleryPhotoItem from './GalleryPhotoItem';
import './styles/gallery-photos.scss';

const GalleryPhotoContent = ({ photos }) => {
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
            key={photo.key}
            url={`https://source.unsplash.com/random/800x600?sig=${index + 10}`}
          />
        ))}
      {!isPhotosEmpty && <div className="last-content" />}
    </div>
  );
};

const photoShape = PropTypes.shape({
  key: PropTypes.number.isRequired,
});

GalleryPhotoContent.propTypes = {
  photos: PropTypes.arrayOf(photoShape).isRequired,
};

export default GalleryPhotoContent;
export { photoShape };
