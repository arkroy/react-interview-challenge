/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import InitialGlobalState from './State';
import GlobalContext from './Context';
import GlobalReducer from './Reducer';

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, InitialGlobalState);
  // TODO: ADD METHOD TO POST DATA TO A SERVICE WITH THE AUTH TOKEN
  const onComplete = () => {
    return true;
  };

  return (
    <GlobalContext.Provider
      value={{
        appError: state.appError,
        onComplete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default GlobalStateProvider;
