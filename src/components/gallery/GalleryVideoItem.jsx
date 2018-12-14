import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as PlayIcon } from '../../assets/icons/play-icon.svg';
import RatioContainer from '../structure/RatioContainer';

const GalleryVideoItem = ({ url, onClick }) => (
  <RatioContainer
    ratio={9 / 16}
    className="gallery-video-item-content-container"
  >
    <button
      className="gallery-video-item thumb"
      style={{ backgroundImage: `url(${url})` }}
      type="button"
      onClick={onClick}
    />
    <div className="gallery-video-item accessories">
      <PlayIcon />
    </div>
  </RatioContainer>
);

GalleryVideoItem.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryVideoItem;
