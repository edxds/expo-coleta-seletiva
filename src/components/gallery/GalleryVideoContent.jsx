import React from 'react';
import PropTypes from 'prop-types';

import GalleryVideoItem from './GalleryVideoItem';
import './styles/gallery-videos.scss';

const GalleryVideoContent = ({ videos, handleVideoClick }) => {
  const isVideosEmpty = !videos || videos.length === 0;

  return (
    <div
      className={`gallery-section-content ${
        isVideosEmpty ? 'empty' : ''
      } videos`}
    >
      {isVideosEmpty && <p>Nenhum vídeo disponível</p>}
      {!isVideosEmpty &&
        videos.map(video => (
          <GalleryVideoItem
            key={video.url}
            url={video.url}
            onClick={handleVideoClick}
          />
        ))}
      {!isVideosEmpty && <div className="video-margin-bottom" />}
    </div>
  );
};

const videoShape = PropTypes.shape({
  key: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
});

GalleryVideoContent.propTypes = {
  videos: PropTypes.arrayOf(videoShape).isRequired,
  handleVideoClick: PropTypes.func.isRequired,
};

export default GalleryVideoContent;
export { videoShape };
