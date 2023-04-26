import Axios from "../utility/Axios";
import t from "../utility/types";

export const createUser = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/user/register", { ...data });
    dispatch({
      type: t.CREATE_USER,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: t.ERROR,
      payload: error.response.data,
    });
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/user/login", { ...data });
    dispatch({
      type: t.LOGIN_USER,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: t.ERROR,
      payload: error.response.data,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await Axios.get("/user/profile");
    dispatch({
      type: t.LOAD_USER,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: t.ERROR,
      payload: error.response.data,
    });
  }
};
