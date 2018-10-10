import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../app';
import Navigation from '../navigation';
import UnderConstruction from '../under-construction';

const RoutedApp = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          exact
          path="/processo"
          render={props => <App {...props} startOnProcess />}
        />
        <Route component={UnderConstruction} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default RoutedApp;
