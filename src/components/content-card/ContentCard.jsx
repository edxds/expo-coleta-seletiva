import React from 'react';
import PropTypes from 'prop-types';

import ProportionalHeader from './ProportionalHeader';
import styles from './styles/content-card.module.scss';

const ContentCard = ({ info }) => (
  <div className={styles.card}>
    <ProportionalHeader
      ratio={3 / 4}
      image={info.image}
      imageOptions={info.imageOptions}
      className={styles.header}
    />
    <div className={styles.content}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{info.name}</span>
        <div className={styles.badge}>
          <span>{info.group}</span>
        </div>
      </div>
      <div>
        <p className={styles.question}>
          Para onde você acha que este material vai?
        </p>
        <p className={styles.answer}>{info.content.where}</p>
        <p className={styles.question}>
          O que este material significa para você?
        </p>
        <p className={styles.answer}>
          {info.content.meaning.split('\n').map((item, key) => (
            <React.Fragment key={key}>
              {item}
              <br />
            </React.Fragment>
          ))}
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
