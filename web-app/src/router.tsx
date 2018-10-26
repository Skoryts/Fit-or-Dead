import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { Login } from './components/Login';
import { NotFound } from './components/NotFound';

const history = createBrowserHistory();

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
      <Router history={ history }>
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
};
