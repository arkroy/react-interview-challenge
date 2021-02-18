/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import InitialShippingWeightState from './State';
import { SET_SHIPPING_WEIGHT } from './actionTypes';
import ShippingWeightContext from './Context';
import ShippingWeightReducer from './Reducer';
import setShippingWeight from './Actions';

const ShippingWeightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShippingWeightReducer, InitialShippingWeightState);

  const setWeight = (e) => {
    setShippingWeight(dispatch, SET_SHIPPING_WEIGHT, e.target.value);
  };

  return (
    <ShippingWeightContext.Provider
      value={{
        weight: state.weight,
        setWeight,
      }}
    >
      {children}
    </ShippingWeightContext.Provider>
  );
};

ShippingWeightProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default ShippingWeightProvider;
