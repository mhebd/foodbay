import Axios from "../utility/Axios";
import handleApiErr from "../utility/handleApiErr";
import removeMsg from "../utility/removeMsg";
import t from "../utility/types";

export const fetchSliders = () => async (dispatch) => {
  try {
    const res = await Axios.get(`/slider`);
    dispatch({
      type: t.FETCH_SLIDERS,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const createSlider = (data) => async (dispatch) => {
  try {
    const res = await Axios.post(`/slider`, data);
    dispatch({
      type: t.CREATE_SLIDER,
      payload: res.data,
    });
    removeMsg(dispatch, t.REMOVE_SLIDER_MSG);
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const deleteSlider = (id) => async (dispatch) => {
  try {
    await Axios.delete(`/slider/${id}`);

    dispatch({
      type: t.DELETE_SLIDER,
      payload: id,
    });
    removeMsg(dispatch, t.REMOVE_SLIDER_MSG);
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const updateSlider = (id, data) => async (dispatch) => {
  try {
    const res = await Axios.patch(`/slider/${id}`, data);

    dispatch({
      type: t.UPDATE_SLIDER,
      payload: res.data.data,
    });
    removeMsg(dispatch, t.REMOVE_SLIDER_MSG);
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};
