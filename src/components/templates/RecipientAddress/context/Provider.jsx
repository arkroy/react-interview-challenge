/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import InitialRecipientState from './State';
import {
  SET_RECIPIENT_NAME,
  SET_RECIPIENT_ADDRESS,
  SET_RECIPIENT_CITY,
  SET_RECIPIENT_STATE,
  SET_RECIPIENT_ZIPCODE,
  SET_RECIPIENT_COUNTRY,
} from './actionTypes';
import RecipientContext from './Context';
import RecipientReducer from './Reducer';
import setRecipientData from './Actions';

const RecipientStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecipientReducer, InitialRecipientState);

  const setRecipientName = (e) => {
    setRecipientData(dispatch, SET_RECIPIENT_NAME, e.target.value);
  };
  const setRecipientAddress = (value) => {
    setRecipientData(dispatch, SET_RECIPIENT_ADDRESS, value);
  };
  const setRecipientCity = (value) => {
    setRecipientData(dispatch, SET_RECIPIENT_CITY, value);
  };
  const setRecipientState = (value) => {
    setRecipientData(dispatch, SET_RECIPIENT_STATE, value);
  };
  const setRecipientZipcode = (value) => {
    setRecipientData(dispatch, SET_RECIPIENT_ZIPCODE, value);
  };
  const setRecipientCountry = (value) => {
    setRecipientData(dispatch, SET_RECIPIENT_COUNTRY, value);
  };

  return (
    <RecipientContext.Provider
      value={{
        name: state.name,
        address: state.address,
        state: state.state,
        city: state.city,
        zipcode: state.zipcode,
        country: state.country,
        setRecipientName,
        setRecipientAddress,
        setRecipientCity,
        setRecipientState,
        setRecipientZipcode,
        setRecipientCountry,
      }}
    >
      {children}
    </RecipientContext.Provider>
  );
};

RecipientStateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default RecipientStateProvider;
