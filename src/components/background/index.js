import React from 'react';

import './background.css';

export default class Background extends React.Component {
    render() {
        return (
            <div className="background-container">
                <img className="background" src={this.props.url} />
            </div>
        )
    }
}