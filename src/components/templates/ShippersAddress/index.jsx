import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import AddressComponent from '../../molecules/AddressComponent';
import ShipperContext from './context/Context';
import messages from '../../../shared/messages';

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

const ShippersAddress = () => {
  const shipperContext = useContext(ShipperContext);
  const classes = useStyles();

  return (
    <>
      <h2>{messages.shippersAddressHeading}</h2>
      <FormControl className={classes.formControl}>
        <TextField
          fullWidth
          value={shipperContext.name}
          id="standard-basic"
          onChange={shipperContext.setShippersName}
          label={messages.commonNameFieldLabel}
        />
      </FormControl>
      <AddressComponent
        addressDefaultValue={shipperContext.address}
        cityDefaultValue={shipperContext.city}
        zipcodeDefaultValue={shipperContext.zipcode}
        countryDefaultValue={shipperContext.country}
        stateDefaultValue={shipperContext.state}
        addressOnChangeHandler={shipperContext.setShippersAddress}
        cityOnChangeHandler={shipperContext.setShippersCity}
        stateOnChangeHandler={shipperContext.setShippersState}
        zipcodeOnChangeHandler={shipperContext.setShippersZipcode}
        countryOnChangeHandler={shipperContext.setShippersCountry}
      />
    </>
  );
};

export default ShippersAddress;
