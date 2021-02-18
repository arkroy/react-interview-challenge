import { SET_ERROR_STATE } from './actionTypes';

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case SET_ERROR_STATE:
      return {
        ...state,
        appError: action.payload,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
