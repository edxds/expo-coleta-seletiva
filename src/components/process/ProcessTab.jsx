import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/process-tab.module.scss';

const ProcessTab = ({ title, disappear, handleClick }) => {
  const svgWidth = 16;
  const svgHeight = svgWidth / 4;

  const svgMiddle = svgWidth / 2;
  const svgBottom = svgHeight;

  const svgPath = !disappear
    ? `M0 ${svgBottom} L${svgMiddle} 0 L${svgWidth} ${svgBottom}`
    : `M0 ${svgHeight / 2} L${svgMiddle} ${svgHeight /
        2} L${svgWidth} ${svgHeight / 2}`;

  const buttonClass = `${styles.container} ${disappear ? styles.merge : ''}`;
  const buttonOnClick = !disappear ? handleClick : null;

  return (
    <button className={buttonClass} onClick={buttonOnClick} type="button">
      <svg className={styles.chevron} width={20} height={5} viewBox="0 0 20 5">
        <path d={svgPath} />
      </svg>
      <p className={styles.title}>{title}</p>
    </button>
  );
};

ProcessTab.propTypes = {
  title: PropTypes.string.isRequired,
  disappear: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProcessTab;
