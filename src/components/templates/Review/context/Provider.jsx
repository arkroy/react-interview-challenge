/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import InitialReviewState from './State';
import { SET_SHIPPING_COST } from './actionTypes';
import ReviewContext from './Context';
import ReviewReducer from './Reducer';
import setShippingCost from './Actions';
import calcShippingCost from '../../../../shared/appUtils/calculatorUtil';

const ReviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReviewReducer, InitialReviewState);

  const setCost = (weight, priority) => {
    const shippingCost = calcShippingCost(weight, priority);
    setShippingCost(dispatch, SET_SHIPPING_COST, shippingCost);
  };

  return (
    <ReviewContext.Provider
      value={{
        cost: state.cost,
        setCost,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

ReviewProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default ReviewProvider;
