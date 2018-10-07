import React from 'react';

import ChevronUp from '../../../assets/icons/chevron-up.svg';
import './process-button.scss';

const ProcessButton = props => (
  <button className="process-cta" type="button" {...props}>
    <p>O PROCESSO</p>
    <img src={ChevronUp} alt="" />
  </button>
);

export default ProcessButton;
