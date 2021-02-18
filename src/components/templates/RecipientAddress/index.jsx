import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import AddressComponent from '../../molecules/AddressComponent';
import messages from '../../../shared/messages';
import RecipientContext from './context/Context';

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

const RecipientAddress = () => {
  const recipientContext = useContext(RecipientContext);

  const classes = useStyles();

  return (
    <>
      <h2>{messages.recipientAddressHeading}</h2>
      <FormControl className={classes.formControl}>
        <TextField
          value={recipientContext.name}
          fullWidth
          id="recipient-standard-basic"
          onChange={recipientContext.setRecipientName}
          label={messages.commonNameFieldLabel}
        />
      </FormControl>
      <AddressComponent
        addressDefaultValue={recipientContext.address}
        cityDefaultValue={recipientContext.city}
        zipcodeDefaultValue={recipientContext.zipcode}
        countryDefaultValue={recipientContext.country}
        stateDefaultValue={recipientContext.state}
        addressOnChangeHandler={recipientContext.setRecipientAddress}
        cityOnChangeHandler={recipientContext.setRecipientCity}
        stateOnChangeHandler={recipientContext.setRecipientState}
        zipcodeOnChangeHandler={recipientContext.setRecipientZipcode}
        countryOnChangeHandler={recipientContext.setRecipientCountry}
      />
    </>
  );
};

export default RecipientAddress;
