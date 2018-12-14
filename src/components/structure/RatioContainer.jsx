import React from 'react';
import PropTypes from 'prop-types';

class RatioContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    ratio: PropTypes.number.isRequired,
  };

  state = {
    dimensions: {
      width: 0,
      height: 0,
    },
  };

  containerRef = React.createRef();

  componentDidMount() {
    window.addEventListener('resize', this.setHeight);
    this.setHeight();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeight);
  }

  getDimensions = ratio => {
    const width = this.containerRef.current.clientWidth;
    const height = width * ratio;

    return { width, height };
  };

  setHeight = () => {
    const { ratio } = this.props;
    const dimensions = this.getDimensions(ratio);

    if (this.state.dimensions !== dimensions) {
      this.setState({ dimensions });
    }
  };

  render() {
    const { ratio, children, ...passthrough } = this.props;
    const { dimensions } = this.state;
    return (
      <div
        ref={this.containerRef}
        style={{ height: dimensions.height }}
        {...passthrough}
      >
        {this.props.children}
      </div>
    );
  }
}

export default RatioContainer;
