import React from 'react';
import PropTypes from 'prop-types';

import GalleryVideoItem from './GalleryVideoItem';
import styles from './styles/gallery-videos.module.scss';

const GalleryVideoContent = ({ videos, handleVideoClick }) => {
  const isVideosEmpty = !videos || videos.length === 0;

  return (
    <div
      className={`${styles.videoSection} ${isVideosEmpty ? styles.empty : ''}`}
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
