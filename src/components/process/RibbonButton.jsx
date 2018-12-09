import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as ChevronUp } from '../../assets/icons/chevron-up.svg';
import styles from './styles/ribbon-link.module.scss';

const RibbonLink = ({ to, title }) => (
  <Link to={to} className={styles.link}>
    <div className={styles.ribbon} />
    <span>{title}</span>
    <ChevronUp className={styles.chevron} />
  </Link>
);

RibbonLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RibbonLink;
