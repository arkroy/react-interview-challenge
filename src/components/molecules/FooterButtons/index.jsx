import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import messages from '../../../shared/messages';

const floatRight = 'right';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      float: floatRight,
    },
  },
}));

const FooterButtons = ({ onPrevClick, onNextClick, progress }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {progress === 100 ? null : (
        <Button variant="outlined" onClick={onNextClick} color="primary">
          {messages.commonNextButtonLabel}
        </Button>
      )}
      {progress === 16 ? null : (
        <Button variant="outlined" onClick={onPrevClick} color="secondary">
          {messages.commonBackButtonLabel}
        </Button>
      )}
    </div>
  );
};
FooterButtons.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default FooterButtons;
