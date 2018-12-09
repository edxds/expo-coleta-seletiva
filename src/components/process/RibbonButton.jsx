import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as ChevronUp } from '../../assets/icons/chevron-up.svg';
import './styles/ribbon-link.scss';

const RibbonLink = ({ to, title }) => (
  <div className="gallery-button-container">
    <Link to={to} className="go-to-gallery">
      <div className="ribbon" />
      <span>{title}</span>
      <ChevronUp className="chevron-right" />
    </Link>
  </div>
);

RibbonLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RibbonLink;
