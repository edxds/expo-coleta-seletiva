import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as PlayIcon } from '../../assets/icons/play-icon.svg';

const GalleryVideoItem = ({ url, onClick }) => (
  <div className="gallery-video-item-container">
    <button
      className="gallery-video-item thumb"
      style={{ backgroundImage: `url(${url})` }}
      type="button"
      onClick={onClick}
    />
    <div className="gallery-video-item accessories">
      <PlayIcon />
    </div>
  </div>
);

GalleryVideoItem.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryVideoItem;
