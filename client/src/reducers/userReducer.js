import t from "../utility/types";
const initialState = {
  user: null,
  token: null,
  error: null,
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

    case t.ERROR:
      return {
        ...state,
        error: { ...payload },
      };
      break;

    default:
      return state;
      break;
  }
};

export default userReducer;
