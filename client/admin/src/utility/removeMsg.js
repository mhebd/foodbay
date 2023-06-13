export default (dispatch, type) => {
  setTimeout(() => {
    dispatch({
      type,
    });
  }, 500);
};
