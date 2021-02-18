import {
  SET_RECIPIENT_NAME,
  SET_RECIPIENT_ADDRESS,
  SET_RECIPIENT_CITY,
  SET_RECIPIENT_STATE,
  SET_RECIPIENT_ZIPCODE,
  SET_RECIPIENT_COUNTRY,
} from './actionTypes';

const RecipientReducer = (state, action) => {
  switch (action.type) {
    case SET_RECIPIENT_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_RECIPIENT_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_RECIPIENT_STATE:
      return {
        ...state,
        state: action.payload,
      };
    case SET_RECIPIENT_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_RECIPIENT_ZIPCODE:
      return {
        ...state,
        zipcode: action.payload,
      };
    case SET_RECIPIENT_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default RecipientReducer;
