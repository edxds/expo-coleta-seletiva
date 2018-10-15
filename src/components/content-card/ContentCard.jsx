import React from 'react';
import PropTypes from 'prop-types';

import ProportionalHeader from './ProportionalHeader';
import './styles/content-cards.scss';

const ContentCard = ({ info }) => (
  <div className="content-card">
    <ProportionalHeader
      ratio={3 / 4}
      image={info.image}
      imageOptions={info.imageOptions}
    />
    <div className="content">
      <div className="card-title">
        <span>{info.name}</span>
        <div className="badge">
          <span>{info.group}</span>
        </div>
      </div>
      <p>{info.text}</p>
    </div>
  </div>
);

ContentCard.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    group: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default ContentCard;
