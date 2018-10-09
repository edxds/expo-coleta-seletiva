import React from 'react';

import ChevronUp from '../../../assets/icons/chevron-up.svg';
import './process-button.scss';

const ProcessButton = ({ style, ...props }) => {
  const pointerEvents = style.opacity === 0 ? { pointerEvents: 'none' } : {};
  const resultStyle = { ...style, ...pointerEvents };

  return (
    <button className="process-cta" type="button" style={resultStyle} {...props}>
      <p>O PROCESSO</p>
      <img src={ChevronUp} alt="" />
    </button>
  )
};

export default ProcessButton;
