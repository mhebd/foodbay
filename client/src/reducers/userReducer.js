import t from "../utility/types";
const initialState = {
  user: null,
  token: null,
  users: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case t.CREATE_USER:
      return {
        ...state,
        error: null,
        ...payload,
      };
      break;

    case t.LOGIN_USER:
      return {
        ...state,
        error: null,
        ...payload,
      };
      break;

    case t.LOAD_USER:
      return {
        ...state,
        error: null,
        ...payload,
      };
      break;

    case t.FETCH_USERS:
      return {
        ...state,
        ...payload,
        error: null,
      };
      break;

    default:
      return state;
      break;
  }
};

export default userReducer;
