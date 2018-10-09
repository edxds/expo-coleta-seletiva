import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as TrashIcon } from '../../../assets/icons/trash-icon.svg';
import { ReactComponent as ChecklistIcon } from '../../../assets/icons/checklist-filled-icon.svg';
import { ReactComponent as TruckIcon } from '../../../assets/icons/truck-icon.svg';

const ProgressBar = ({ elevate, progress, handleClick, ...props }) => {
  const elevateClassName = elevate ? 'elevated' : '';

  const aActive = progress.a > 0 && !progress.b;
  const bActive = progress.b > 0 && !progress.c;
  const cActive = progress.c > 0 && !bActive;

  return (
    <div className={`progress-header ${elevateClassName}`} {...props}>
      <div className="progress-header-item" onClick={() => handleClick(0)}>
        <div className={`progress-header-icon ${aActive ? 'active' : ''}`}>
          <TrashIcon />
        </div>

        <div className="progress-header-progress">
          <div
            className="progress-header-progress active"
            style={{ width: `${progress.a * 100}%` }}
          />
        </div>
      </div>

      <div className="progress-header-item" onClick={() => handleClick(1)}>
        <div className={`progress-header-icon ${bActive ? 'active' : ''}`}>
          <ChecklistIcon style={{ marginBottom: 3 }} />
        </div>

        <div className="progress-header-progress">
          <div
            className="progress-header-progress active"
            style={{ width: `${progress.b * 100}%` }}
          />
        </div>
      </div>

      <div className="progress-header-item" onClick={() => handleClick(2)}>
        <div className={`progress-header-icon ${cActive ? 'active' : ''}`}>
          <TruckIcon style={{ marginLeft: 2 }} />
        </div>

        <div className="progress-header-progress">
          <div
            className="progress-header-progress active"
            style={{ width: `${progress.c * 100}%` }}
          />
        </div>
      </div>
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
