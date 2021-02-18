import { SET_SHIPPING_WEIGHT } from './actionTypes';

const ShippingWeightReducer = (state, action) => {
  switch (action.type) {
    case SET_SHIPPING_WEIGHT:
      return {
        ...state,
        weight: action.payload,
      };
    default:
      return state;
  }
};

export default ShippingWeightReducer;
