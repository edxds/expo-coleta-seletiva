import React from 'react';
import ReactDOM from 'react-dom';

import smoothscroll from 'smoothscroll-polyfill';

import App from './components/app';

smoothscroll.polyfill();

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
