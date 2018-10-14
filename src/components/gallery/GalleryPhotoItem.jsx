import React from 'react';
import PropTypes from 'prop-types';

const GalleryPhotoItem = ({ url }) => (
  <div
    className="gallery-photo-item"
    style={{ backgroundImage: `url(${url})` }}
  />
);

GalleryPhotoItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GalleryPhotoItem;
