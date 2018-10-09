import React from 'react';
import ReactDOM from 'react-dom';

import smoothscroll from 'smoothscroll-polyfill';

import RoutedApp from './components/routed';

smoothscroll.polyfill();

/* eslint-disable */
ReactDOM.render(<RoutedApp />, document.getElementById('root'));
