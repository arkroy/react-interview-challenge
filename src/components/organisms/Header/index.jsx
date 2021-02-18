/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import LinearProgress from '@material-ui/core/LinearProgress';
import { routeController } from '../../../shared/appRouter';

const Header = ({ location, heading }) => {
  const getAppProgress = routeController(location.pathname, false);

  return (
    <>
      <h1>{heading}</h1>
      <LinearProgress variant="determinate" value={getAppProgress.progress} />
    </>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
};

export default withRouter(Header);
