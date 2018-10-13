import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import UnderConstruction from '../under-construction';

import { ThemeManager } from '../context';
import Navigation from '../navigation';

import './app.scss';

const App = () => (
  <BrowserRouter>
    <ThemeManager>
      <div id="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/processo"
            render={props => <Home {...props} startOnProcess />}
          />
          <Route component={UnderConstruction} />
        </Switch>
      </div>
    </ThemeManager>
  </BrowserRouter>
);

export default App;
