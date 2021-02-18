/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import InitialShippingOptionsState from './State';
import { SET_SHIPPING_MODE, SET_SHIPPING_PRIORITY } from './actionTypes';
import ShippingOptionsContext from './Context';
import ShippingOptionsReducer from './Reducer';
import setShippingOptions from './Actions';

const ShippingOptionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShippingOptionsReducer, InitialShippingOptionsState);

  const setShippingMode = (e) => {
    setShippingOptions(dispatch, SET_SHIPPING_MODE, e.target.value);
  };
  const setShippingPriority = (e) => {
    setShippingOptions(dispatch, SET_SHIPPING_PRIORITY, e.target.value);
  };

  return (
    <ShippingOptionsContext.Provider
      value={{
        mode: state.mode,
        priority: state.priority,
        setShippingMode,
        setShippingPriority,
      }}
    >
      {children}
    </ShippingOptionsContext.Provider>
  );
};

ShippingOptionsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default ShippingOptionsProvider;
