import React from 'react';
import PropTypes from 'prop-types';

const GalleryPhotoItem = ({ url, index, onClick }) => {
  const onClickPhoto = () => onClick(index);

  return (
    <button
      className="gallery-photo-item"
      style={{ backgroundImage: `url(${url})` }}
      onClick={onClickPhoto}
      type="button"
    />
  );
};

GalleryPhotoItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GalleryPhotoItem;
