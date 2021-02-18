import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Dropdown from '../../atoms/Dropdown';
import messages from '../../../shared/messages';
import { COUNTRIES_ARRAY, STATES_ARRAY } from '../../../shared/constants';

const cover = '100%';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    width: cover,
  },
}));

const AddressComponent = ({
  addressDefaultValue,
  cityDefaultValue,
  zipcodeDefaultValue,
  countryDefaultValue,
  stateDefaultValue,
  addressOnChangeHandler,
  cityOnChangeHandler,
  stateOnChangeHandler,
  zipcodeOnChangeHandler,
  countryOnChangeHandler,
}) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <TextField
          fullWidth
          value={addressDefaultValue}
          id="address-standard-basic"
          onChange={(e) => addressOnChangeHandler(e.target.value)}
          label={messages.commonStreetFieldLabel}
        />
      </FormControl>
      <Grid container spacing={3}>
        <Grid item xs>
          <FormControl className={classes.formControl}>
            <TextField
              fullWidth
              value={cityDefaultValue}
              id="city-standard-basic"
              onChange={(e) => cityOnChangeHandler(e.target.value)}
              label={messages.commonCityFieldLabel}
            />
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl className={classes.formControl}>
            <Dropdown
              label={messages.commonStateFieldLabel}
              selectOptions={STATES_ARRAY}
              selectedValue={stateDefaultValue}
              handleChange={(e) => stateOnChangeHandler(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl className={classes.formControl}>
            <TextField
              fullWidth
              value={zipcodeDefaultValue}
              id="zipcode-standard-basic"
              onChange={(e) => zipcodeOnChangeHandler(e.target.value)}
              label={messages.commonZipCodeFieldLabel}
            />
          </FormControl>
        </Grid>
      </Grid>
      <FormControl className={classes.formControl}>
        <Dropdown
          label={messages.commonCountryFieldLabel}
          selectOptions={COUNTRIES_ARRAY}
          selectedValue={countryDefaultValue}
          handleChange={(e) => countryOnChangeHandler(e.target.value)}
        />
      </FormControl>
    </>
  );
};

AddressComponent.propTypes = {
  addressDefaultValue: PropTypes.string.isRequired,
  cityDefaultValue: PropTypes.string.isRequired,
  zipcodeDefaultValue: PropTypes.string.isRequired,
  countryDefaultValue: PropTypes.string.isRequired,
  stateDefaultValue: PropTypes.string.isRequired,
  addressOnChangeHandler: PropTypes.func.isRequired,
  cityOnChangeHandler: PropTypes.func.isRequired,
  stateOnChangeHandler: PropTypes.func.isRequired,
  zipcodeOnChangeHandler: PropTypes.func.isRequired,
  countryOnChangeHandler: PropTypes.func.isRequired,
};

export default AddressComponent;
