import Axios from "../utility/Axios";
import t from "../utility/types";

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await Axios.get(`/category`);

    dispatch({
      type: t.FETCH_CATEGORIES,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: t.ERROR,
      payload: error.response.data,
    });
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
  } catch (error) {
    dispatch({
      type: t.ERROR,
      payload: error.response.data,
    });
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
  } catch (error) {
    dispatch({
      type: t.ERROR,
      payload: error.response.data,
    });
  }
};

export const fetchCategoryWithProduct = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(`/category/${id}`);

    dispatch({
      type: t.FETCH_CATEGORY_WP,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: t.ERROR,
      payload: error.response.data,
    });
  }
};
