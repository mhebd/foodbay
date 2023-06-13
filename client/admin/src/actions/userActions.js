import Axios from "../utility/Axios";
import handleApiErr from "../utility/handleApiErr";
import t from "../utility/types";

export const createUser = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/user/register", { ...data });
    dispatch({
      type: t.CREATE_USER,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/user/login", { ...data });
    dispatch({
      type: t.LOGIN_USER,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await Axios.get("/user/profile");
    dispatch({
      type: t.LOAD_USER,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await Axios.get("/user");
    dispatch({
      type: t.FETCH_USERS,
      payload: res.data.data,
    });
  } catch (err) {
    handleApiErr(dispatch, err);
  }
};
