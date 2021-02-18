/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import FooterButtons from '../../molecules/FooterButtons';
import { routeController } from '../../../shared/appRouter';

const Footer = (props) => {
  const { location, history } = props;

  const getAppProgress = routeController(location.pathname, false);

  const nextClickHander = () => {
    history.push(`${getAppProgress.nextPage}`);
  };

  const prevClickHander = () => {
    history.push(getAppProgress.previousPage);
  };

  return (
    <div>
      <FooterButtons
        progress={getAppProgress.progress}
        onPrevClick={prevClickHander}
        onNextClick={nextClickHander}
      />
    </div>
  );
};
Footer.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default withRouter(Footer);
