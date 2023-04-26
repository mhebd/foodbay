import Axios from "../utility/Axios";
import handleApiErr from "../utility/handleApiErr";
import t from "../utility/types";

// productActions.js
export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await Axios.get("/product");
    dispatch({
      type: t.FETCH_PRODUCTS,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const createProduct = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/product", data);
    console.log(res.data.data);
    dispatch({
      type: t.CREATE_PRODUCT,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    const res = await Axios.patch(`/product/${id}`, productData);
    dispatch({
      type: t.UPDATE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await Axios.delete(`/product/${id}`);
    dispatch({
      type: t.DELETE_PRODUCT,
      payload: id,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};
