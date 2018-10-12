import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';

import Navigation from '../navigation';
import UnderConstruction from '../under-construction';

const RoutedApp = () => (
  <BrowserRouter>
    <React.Fragment>
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
    </React.Fragment>
  </BrowserRouter>
);

export default RoutedApp;
