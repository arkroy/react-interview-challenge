import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import messages from '../../../shared/messages';
import ShippingWeightContext from './context/Context';

const ShippingWeight = () => {
  const shippingWeightContext = useContext(ShippingWeightContext);
  return (
    <>
      <h2>{messages.shippingWeightHeading}</h2>
      <TextField
        fullWidth
        value={shippingWeightContext.weight}
        onChange={shippingWeightContext.setWeight}
        id="width-standard-basic"
        label={messages.shippingWeightLabel}
      />
    </>
  );
};

export default ShippingWeight;
