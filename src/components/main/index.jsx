import React from 'react';
import './main.css';

import Title from '../title';
import Background from '../background';

export default class Main extends React.Component {
  state = {
    logoUrl:
      'http://www.cefet-rj.br/attachments/article/431/Vertical%20branco.png',
    backgroundUrl:
      'http://www.cefet-rj.br/images/imagens_artigos/2015/10/bloco_e.jpg',
  };

  render() {
    const { logoUrl, backgroundUrl } = this.state;

    return (
      <main>
        <Title logoUrl={logoUrl} />
        <Background url={backgroundUrl} />
      </main>
    );
  }
}
