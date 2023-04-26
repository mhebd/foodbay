import t from "./types";

export default (dispatch, err) => {
  dispatch({
    type: t.ERROR,
    payload: err.response.data,
  });
};
