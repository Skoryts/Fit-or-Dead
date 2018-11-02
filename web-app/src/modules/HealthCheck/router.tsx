import * as React from 'react';
import { Route } from 'react-router-dom';

export const HealthCheckRouter: React.StatelessComponent<{}> = ( match ) => {
  return (
    <Route exact path={`${match}/1`}/>
  );
};
