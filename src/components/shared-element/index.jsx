import React from 'react';
import PropTypes from 'prop-types';

const SharedElement = ({ morph, renderFrom, fromStyle, renderTo, toStyle }) => {
  const style = morph ? toStyle : fromStyle;

  return (
    <div className={`shared-el ${morph ? 'morph' : ''}`}>
      {renderFrom({ opacity: morph ? 0 : 1, ...style })}
      {renderTo({ opacity: morph ? 1 : 0, ...style })}
    </div>
  );
};

SharedElement.propTypes = {
  morph: PropTypes.bool,
  renderFrom: PropTypes.func.isRequired,
  fromStyle: PropTypes.object.isRequired, // eslint-disable-line
  renderTo: PropTypes.func.isRequired,
  toStyle: PropTypes.object.isRequired, // eslint-disable-line
};

SharedElement.defaultProps = {
  morph: false,
};

export default SharedElement;
