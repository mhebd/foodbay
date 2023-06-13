import Axios from "../utility/Axios";
import handleApiErr from "../utility/handleApiErr";
import removeMsg from "../utility/removeMsg";
import t from "../utility/types";

export const fetchReviews = () => async (dispatch) => {
  try {
    const res = await Axios.get("/review");
    dispatch({
      type: t.FETCH_REVIEWS,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const createReview = (reviewData) => async (dispatch) => {
  try {
    const res = await Axios.post("/review", reviewData);
    dispatch({
      type: t.CREATE_REVIEW,
      payload: res.data,
    });
    removeMsg(dispatch, t.REMOVE_REVIEW_MSG);
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const updateReview = (reviewId, reviewData) => async (dispatch) => {
  try {
    const res = await Axios.patch(`/review/${reviewId}`, reviewData);
    dispatch({
      type: t.UPDATE_REVIEW,
      payload: res.data,
    });
    removeMsg(dispatch, t.REMOVE_REVIEW_MSG);
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  try {
    await Axios.delete(`/review/${reviewId}`);
    dispatch({
      type: t.DELETE_REVIEW,
      payload: reviewId,
    });
    removeMsg(dispatch, t.REMOVE_REVIEW_MSG);
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};
