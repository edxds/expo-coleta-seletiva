import React from 'react';
import PropTypes from 'prop-types';
import './styles/process-tab.scss';

const ProcessTab = ({ title, disappear, handleClick }) => {
  const svgWidth = 16;
  const svgHeight = svgWidth / 4;

  const svgMiddle = svgWidth / 2;
  const svgBottom = svgHeight;

  const svgPath = !disappear
    ? `M0 ${svgBottom} L${svgMiddle} 0 L${svgWidth} ${svgBottom}`
    : `M0 ${svgHeight / 2} L${svgMiddle} ${svgHeight /
        2} L${svgWidth} ${svgHeight / 2}`;

  return (
    <button
      className={`process-header ${disappear ? 'merge' : ''}`}
      onClick={!disappear ? handleClick : null}
      type="button"
    >
      <svg className="chevron-up" width={20} height={5} viewBox="0 0 20 5">
        <path d={svgPath} />
      </svg>
      <p className="header-title">{title}</p>
    </button>
  );
};

ProcessTab.propTypes = {
  title: PropTypes.string.isRequired,
  disappear: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProcessTab;
