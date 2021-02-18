import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import messages from '../../../shared/messages';
import Dropdown from '../../atoms/Dropdown';
import { SHIPPING_MODE, SHIPPING_PRIORITY } from '../../../shared/constants/selectOpts/shipping';
import ShippingOptionsContext from './context/Context';

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

const ShippingOptions = () => {
  const shippingOptionsContext = useContext(ShippingOptionsContext);

  const classes = useStyles();

  return (
    <>
      <h2>{messages.shippingOptionsHeading}</h2>
      <FormControl className={classes.formControl}>
        <Dropdown
          label={messages.modeOfShipmentLabel}
          selectedValue={shippingOptionsContext.mode}
          handleChange={shippingOptionsContext.setShippingMode}
          selectOptions={SHIPPING_MODE}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Dropdown
          label={messages.shippingPriorityLabel}
          selectedValue={shippingOptionsContext.priority}
          handleChange={shippingOptionsContext.setShippingPriority}
          selectOptions={SHIPPING_PRIORITY}
        />
      </FormControl>
    </>
  );
};
export default ShippingOptions;
