const setGlobalData = (dispatch, type, payload) => {
  dispatch({
    type,
    payload,
  });
};
export default setGlobalData;
