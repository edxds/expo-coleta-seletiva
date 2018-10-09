import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as TrashIcon } from '../../../assets/icons/trash-icon.svg';
import { ReactComponent as ChecklistIcon } from '../../../assets/icons/checklist-filled-icon.svg';
import { ReactComponent as TruckIcon } from '../../../assets/icons/truck-icon.svg';

const ProgressBarItem = ({
  onClick,
  isActive,
  progress,
  sectionId,
  children,
}) => {
  const handleClick = () => {
    onClick(sectionId);
  };

  return (
    <div
      className="progress-header-item"
      aria-hidden="true"
      onClick={handleClick}
    >
      <div className={`progress-header-icon ${isActive ? 'active' : ''}`}>
        {children}
      </div>

      <div className="progress-header-progress">
        <div
          className="progress-header-progress active"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};

ProgressBarItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  sectionId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ProgressBar = ({ elevate, progress, handleClick, ...props }) => {
  const elevateClassName = elevate ? 'elevated' : '';

  const aActive = progress.a > 0 && !progress.b;
  const bActive = progress.b > 0 && !progress.c;
  const cActive = progress.c > 0 && !bActive;

  return (
    <div className={`progress-header ${elevateClassName}`} {...props}>
      <ProgressBarItem
        onClick={handleClick}
        progress={progress.a}
        isActive={aActive}
        sectionId="#section-a"
      >
        <TrashIcon />
      </ProgressBarItem>

      <ProgressBarItem
        onClick={handleClick}
        progress={progress.b}
        isActive={bActive}
        sectionId="#section-b"
      >
        <ChecklistIcon style={{ marginBottom: 3 }} />
      </ProgressBarItem>

      <ProgressBarItem
        onClick={handleClick}
        progress={progress.c}
        isActive={cActive}
        sectionId="#section-c"
      >
        <TruckIcon style={{ marginLeft: 2 }} />
      </ProgressBarItem>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.shape({
    a: PropTypes.number,
    b: PropTypes.number,
    c: PropTypes.number,
  }),
};

ProgressBar.defaultProps = {
  progress: { a: 0, b: 0, c: 0 },
};

export default ProgressBar;
