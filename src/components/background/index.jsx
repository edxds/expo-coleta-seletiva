import React from 'react';
import PropTypes from 'prop-types';

import './background.css';

const Background = ({ url }) => (
  <div className="background-container">
    <img className="background" src={url} alt="" />
  </div>
);

Background.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Background;
