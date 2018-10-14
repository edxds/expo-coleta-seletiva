import React from 'react';
import PropTypes from 'prop-types';

import { connectToTheme } from '../components/context';

import GalleryPresentational from '../components/gallery';
import data from '../components/gallery/data';

class Gallery extends React.Component {
  static propTypes = {
    changeTheme: PropTypes.func.isRequired,
  };

  state = data;

  componentDidMount() {
    const { changeTheme } = this.props;
    changeTheme('dark');
  }

  render() {
    const { photos, videos } = this.state;

    return <GalleryPresentational photos={photos} videos={videos} />;
  }
}

export default connectToTheme(Gallery);
