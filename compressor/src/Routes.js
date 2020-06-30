import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
);

export default Routes;