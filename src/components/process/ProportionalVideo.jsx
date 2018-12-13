import React from 'react';
import PropTypes from 'prop-types';

export default class ProportionalVideo extends React.Component {
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
    this.elRef.current.height = `${height}px`;
  };

  render() {
    const { ratio, ...pass } = this.props;
    return (
      <iframe
        title="Video sobre a Coleta Seletiva"
        src="https://www.youtube.com/embed/0m76xmNcs1Q"
        frameBorder={0}
        ref={this.elRef}
        {...pass}
      />
    );
  }
}
