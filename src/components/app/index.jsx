import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';

import Navigation from '../navigation';
import UnderConstruction from '../under-construction';

import './app.scss';

const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default App;
