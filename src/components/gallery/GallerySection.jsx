import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/gallery-sections.module.scss';

const GallerySection = props => {
  const { children, id, title } = props;
  return (
    <section id={id} className={styles.section}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
      </div>

      {children}
    </section>
  );
};

GallerySection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GallerySection;
