import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Login } from './components/Login';
import { NotFound } from './components/NotFound';

const history = createBrowserHistory()

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
      <Router history={ history }>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    )
};
