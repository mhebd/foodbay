import Axios from "../utility/Axios";
import handleApiErr from "../utility/handleApiErr";
import t from "../utility/types";

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await Axios.get(`/category`);

    dispatch({
      type: t.FETCH_CATEGORIES,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err)
  }
};

export const createCategory = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/category", {
      name: data.name,
    });

    dispatch({
      type: t.CREATE_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    console.log(id);
    const res = await Axios.delete(`/category/${id}`);
    console.log(res.data);
    dispatch({
      type: t.DELETE_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const fetchCategoryWithProduct = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(`/category/${id}`);

    dispatch({
      type: t.FETCH_CATEGORY_WP,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};
