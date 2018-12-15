import React from 'react';
import PropTypes from 'prop-types';

import RatioContainer from '../structure/RatioContainer';

import { ReactComponent as PlayIcon } from '../../assets/icons/play-icon.svg';
import styles from './styles/gallery-videos.module.scss';

const GalleryVideoItem = ({ url, onClick }) => (
  <RatioContainer ratio={9 / 16} className={styles.contentContainer}>
    <button
      className={`${styles.content} ${styles.thumb}`}
      style={{ backgroundImage: `url(${url})` }}
      type="button"
      onClick={onClick}
    />
    <div className={`${styles.content} ${styles.accessories}`}>
      <PlayIcon />
    </div>
  </RatioContainer>
);

GalleryVideoItem.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryVideoItem;
