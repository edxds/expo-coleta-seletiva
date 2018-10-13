import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as TrashIcon } from '../../assets/icons/trash-icon.svg';
import { ReactComponent as ChecklistIcon } from '../../assets/icons/checklist-filled-icon.svg';
import { ReactComponent as TruckIcon } from '../../assets/icons/truck-icon.svg';
import './styles/progress-bar.scss';

const ProgressBarItem = ({ onClick, sectionId, children, id }) => {
  const handleClick = () => {
    onClick(sectionId);
  };

  return (
    <div
      className="progress-header-item"
      id={`progress-header-item-${id}`}
      aria-hidden="true"
      onClick={handleClick}
    >
      <div className="progress-header-icon" id={`progress-item-icon-${id}`}>
        {children}
      </div>

      <div className="progress-header-progress">
        <div
          className="progress-header-progress active"
          id={`progress-item-progress-${id}`}
        />
      </div>
    </div>
  );
};

ProgressBarItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  sectionId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

const ProgressBar = ({ elevate, handleClick, ...props }) => {
  const elevateClassName = elevate ? 'elevated' : '';

  return (
    <div className={`progress-header ${elevateClassName}`} {...props}>
      <ProgressBarItem onClick={handleClick} sectionId="#section-a" id="a">
        <TrashIcon />
      </ProgressBarItem>

      <ProgressBarItem onClick={handleClick} sectionId="#section-b" id="b">
        <ChecklistIcon style={{ marginBottom: 3 }} />
      </ProgressBarItem>

      <ProgressBarItem onClick={handleClick} sectionId="#section-c" id="c">
        <TruckIcon style={{ marginLeft: 2 }} />
      </ProgressBarItem>
    </div>
  );
};

ProgressBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ProgressBar;
