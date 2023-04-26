import Axios from "../utility/Axios";
import handleApiErr from "../utility/handleApiErr";
import t from "../utility/types";

export const fetchFeatureds = () => async (dispatch) => {
  try {
    const res = await Axios.get(`/featured-card`);

    dispatch({
      type: t.FETCH_FEATUREDS,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const createFeaturedCard = (data) => async (dispatch) => {
  try {
    const res = await Axios.post(`/featured-card`, { ...data });
    console.log(res.data);
    dispatch({
      type: t.CREATE_FEATURED,
      payload: res.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const deleteFeaturedCard = (id) => async (dispatch) => {
  try {
    await Axios.delete(`/featured-card/${id}`);
    dispatch({
      type: t.DELETE_FEATURED,
      payload: id,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const updateFeaturedCard = (id, data) => async (dispatch) => {
  try {
    const res = await Axios.put(`/featured-card/${id}`, { ...data });
    dispatch({
      type: t.UPDATE_FEATURED,
      payload: res.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};
