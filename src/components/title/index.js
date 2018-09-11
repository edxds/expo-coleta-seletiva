import React from 'react';

import './title.css';

export default class Title extends React.Component {
    render() {
        return (
            <div className='title-container'>
                <img className='logo' src={this.props.logoUrl} />
                <h1 className='title'>Coleta Seletiva Solidária</h1>
                <h3 className='subtitle'>CEFET/RJ</h3>
            </div>
        )
    }
}