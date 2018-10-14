import React from 'react';
import PropTypes from 'prop-types';

import GalleryVideoItem from './GalleryVideoItem';

const GalleryVideoContent = ({ videos }) => {
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
          <GalleryVideoItem key={video.key} url={video.url} />
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
};

export default GalleryVideoContent;
export { videoShape };
