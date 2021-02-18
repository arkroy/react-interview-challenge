import { SET_SHIPPING_COST } from './actionTypes';

const ReviewReducer = (state, action) => {
  switch (action.type) {
    case SET_SHIPPING_COST:
      return {
        ...state,
        cost: action.payload,
      };
    default:
      return state;
  }
};

export default ReviewReducer;
