import React from 'react';
import PropTypes from 'prop-types';

export default class ProportionalHeader extends React.Component {
  elRef = React.createRef();

  static propTypes = {
    ratio: PropTypes.number.isRequired,
  };

  componentDidMount() {
    window.addEventListener('resize', this.setHeight);
    this.setHeight();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeight);
  }

  getDimensions = _ratio => {
    const width = this.elRef.current.clientWidth;
    const height = width * _ratio;

    return { width, height };
  };

  setHeight = () => {
    const { height } = this.getDimensions(this.props.ratio);
    this.elRef.current.style.height = `${height}px`;
  };

  render() {
    const { ratio, image, imageOptions, ...pass } = this.props;
    return (
      <div
        ref={this.elRef}
        style={{ backgroundImage: `url(${image})`, ...imageOptions }}
        {...pass}
      />
    );
  }
}
