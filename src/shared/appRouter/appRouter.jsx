/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RouteWrapper } from './routeWrapper';
import { ROUTES_CONFIG } from '../constants';

const AppRouter = () => {
  return ROUTES_CONFIG.map((route, i) => <RouteWrapper key={i} {...route} />);
};

export default AppRouter;
