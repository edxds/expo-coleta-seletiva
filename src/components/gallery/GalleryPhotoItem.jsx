import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/gallery-photos.module.scss';

const GalleryPhotoItem = ({ url, index, onClick }) => {
  const onClickPhoto = () => onClick(index);

  return (
    <button
      className={styles.item}
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
