/* eslint-disable no-undef */
let AuthToken;

export const getSessionValue = (name) => {
  return typeof window !== 'undefined' ? window.sessionStorage.getItem(name) : '';
};
export const getParamsFromSessionStorage = () => {
  AuthToken = getSessionValue('AccessToken');
  return new Promise((resolve) => {
    return resolve({ AuthToken });
  });
};
