import React, { useContext, useEffect } from 'react';
import messages from '../../../shared/messages';
import ShipperContext from '../ShippersAddress/context/Context';
import RecipientContext from '../RecipientAddress/context/Context';
import ShippingOptionsContext from '../ShippingOptions/context/Context';
import ShippingWeightContext from '../ShippingWeight/context/Context';
import ReviewContext from '../Review/context/Context';
import GlobalContext from '../WizardMaster/context/Context';

const Confirmation = () => {
  const shippersContext = useContext(ShipperContext);
  const recipientContext = useContext(RecipientContext);
  const shipingOptionsContext = useContext(ShippingOptionsContext);
  const shippingWeightContext = useContext(ShippingWeightContext);
  const reviewContext = useContext(ReviewContext);
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    globalContext.onComplete(
      shippersContext,
      recipientContext,
      shipingOptionsContext,
      shippingWeightContext
    );
  }, []);

  return (
    <>
      <h2>{messages.confirmationHeading}</h2>
      <h3>
        Shipping Label ID:
        <br />
        {Math.floor(Math.random() * 1000000000)}
      </h3>
      <div>
        {reviewContext.cost !== '' ? (
          <h4>
            {messages.reviewCost}
            <br />
            {reviewContext.cost}
          </h4>
        ) : null}
      </div>
      <div>
        <h4>{messages.shippersAddressHeading}</h4>
        <p>
          {shippersContext.name}
          <br />
          {shippersContext.address}
          <br />
          {shippersContext.city}
          <br />
          {shippersContext.state}
          <br />
          {shippersContext.zipcode}
          <br />
          {shippersContext.country}
          <br />
        </p>
      </div>
      <div>
        <h4>{messages.recipientAddressHeading}</h4>
        <p>
          {recipientContext.name}
          <br />
          {recipientContext.address}
          <br />
          {recipientContext.city}
          <br />
          {recipientContext.state}
          <br />
          {recipientContext.zipcode}
          <br />
          {recipientContext.country}
          <br />
        </p>
      </div>
      <div>
        <h4>{messages.shippingOptionsHeading}</h4>
        <p>
          <strong>{messages.modeOfShipmentLabel}</strong>
          <br />
          {shipingOptionsContext.mode === 1 ? 'Ground' : 'Air'}
        </p>
        <p>
          <strong>{messages.shippingPriorityLabel}</strong>
          <br />
          {shipingOptionsContext.priority === 1 ? 'Regular' : 'Express'}
        </p>
      </div>
      <div>
        <h4>{messages.shippingWeightHeading}</h4>
        <p>
          <strong>{messages.shippingWeightLabel}</strong>
          <br />
          {shippingWeightContext.weight}
        </p>
      </div>
    </>
  );
};

export default Confirmation;
