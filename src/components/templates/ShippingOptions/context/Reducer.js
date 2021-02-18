import { SET_SHIPPING_MODE, SET_SHIPPING_PRIORITY } from './actionTypes';

const ShippingOptionsReducer = (state, action) => {
  switch (action.type) {
    case SET_SHIPPING_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case SET_SHIPPING_PRIORITY:
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default ShippingOptionsReducer;
