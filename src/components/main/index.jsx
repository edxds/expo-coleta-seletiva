import React from 'react';
import './main.css';

import Title from '../title';
import Background from '../background';

export default class Main extends React.Component {
  state = {
    backgroundUrl: require('../../assets/bg-image.jpg'),
  };

  render() {
    const { backgroundUrl } = this.state;

    return (
      <main>
        <Title />
        <Background url={backgroundUrl} />
      </main>
    );
  }
}
