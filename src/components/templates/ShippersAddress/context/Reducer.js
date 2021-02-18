import {
  SET_SHIPPERS_NAME,
  SET_SHIPPERS_ADDRESS,
  SET_SHIPPERS_CITY,
  SET_SHIPPERS_STATE,
  SET_SHIPPERS_ZIPCODE,
  SET_SHIPPERS_COUNTRY,
} from './actionTypes';

const ShipperReducer = (state, action) => {
  switch (action.type) {
    case SET_SHIPPERS_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_SHIPPERS_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_SHIPPERS_STATE:
      return {
        ...state,
        state: action.payload,
      };
    case SET_SHIPPERS_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_SHIPPERS_ZIPCODE:
      return {
        ...state,
        zipcode: action.payload,
      };
    case SET_SHIPPERS_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default ShipperReducer;
