import React from 'react';
import './main.css';

import Title from '../title';
import Background from '../background';

export default class Main extends React.Component {
    state = {
        logoUrl: 'http://www.cefet-rj.br/attachments/article/431/Vertical%20branco.png',
        backgroundUrl: 'http://www.cefet-rj.br/images/imagens_artigos/2015/10/bloco_e.jpg',
    };

    render() {
        return (
            <main>
                <Title logoUrl={this.state.logoUrl} />
                <Background url={this.state.backgroundUrl} />
            </main>
        )
    }
}