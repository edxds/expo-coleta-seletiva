import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as PlayIcon } from '../../assets/icons/play-icon.svg';

const GalleryVideoItem = ({ url }) => (
  <div className="gallery-video-item-container">
    <div
      className="gallery-video-item thumb"
      style={{ backgroundImage: `url(${url})` }}
    />
    <div className="gallery-video-item accessories">
      <PlayIcon />
    </div>
  </div>
);

GalleryVideoItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GalleryVideoItem;
