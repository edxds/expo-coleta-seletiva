import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/gallery-photos.module.scss';
import RatioContainer from '../structure/RatioContainer';

const GalleryPhotoItem = ({ url, index, onClick }) => {
  const onClickPhoto = () => onClick(index);

  return (
    <RatioContainer ratio={1} className={styles.itemContainer}>
      <button
        className={styles.item}
        style={{ backgroundImage: `url(${url})` }}
        onClick={onClickPhoto}
        type="button"
      />
    </RatioContainer>
  );
};

GalleryPhotoItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GalleryPhotoItem;
