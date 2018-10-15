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
      <div>
        <p className="content-title">
          Para onde você acha que este material vai?
        </p>
        <p>{info.content.where}</p>
        <p className="content-title">
          O que este material significa para você?
        </p>
        <p>
          {info.content.meaning.split('\n').map((item, key) => {
            return (
              <React.Fragment key={key}>
                {item}
                <br />
              </React.Fragment>
            );
          })}
        </p>
      </div>
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
