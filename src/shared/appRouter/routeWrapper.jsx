import React from 'react';
import { Route } from 'react-router-dom';

export function RouteWrapper(route) {
  return <Route path={route.path} component={route.component} exact />;
}

export default RouteWrapper;
