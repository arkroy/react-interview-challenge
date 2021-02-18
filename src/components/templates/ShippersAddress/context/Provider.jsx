/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import InitialShipperState from './State';
import {
  SET_SHIPPERS_NAME,
  SET_SHIPPERS_ADDRESS,
  SET_SHIPPERS_CITY,
  SET_SHIPPERS_STATE,
  SET_SHIPPERS_ZIPCODE,
  SET_SHIPPERS_COUNTRY,
} from './actionTypes';
import ShipperContext from './Context';
import ShipperReducer from './Reducer';
import setShipperData from './Actions';

const ShipperStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShipperReducer, InitialShipperState);

  const setShippersName = (e) => {
    setShipperData(dispatch, SET_SHIPPERS_NAME, e.target.value);
  };
  const setShippersAddress = (value) => {
    setShipperData(dispatch, SET_SHIPPERS_ADDRESS, value);
  };
  const setShippersCity = (value) => {
    setShipperData(dispatch, SET_SHIPPERS_CITY, value);
  };
  const setShippersState = (value) => {
    setShipperData(dispatch, SET_SHIPPERS_STATE, value);
  };
  const setShippersZipcode = (value) => {
    setShipperData(dispatch, SET_SHIPPERS_ZIPCODE, value);
  };
  const setShippersCountry = (value) => {
    setShipperData(dispatch, SET_SHIPPERS_COUNTRY, value);
  };

  return (
    <ShipperContext.Provider
      value={{
        name: state.name,
        address: state.address,
        state: state.state,
        city: state.city,
        zipcode: state.zipcode,
        country: state.country,
        setShippersName,
        setShippersAddress,
        setShippersCity,
        setShippersState,
        setShippersZipcode,
        setShippersCountry,
      }}
    >
      {children}
    </ShipperContext.Provider>
  );
};

ShipperStateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default ShipperStateProvider;
