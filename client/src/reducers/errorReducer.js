import t from "../utility/types";

const initialState = {
  success: false,
  message: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case t.ERROR:
      if (typeof payload === "string") {
        return {
          ...state,
          message: payload,
        };
      } else {
        return {
          ...state,
          ...payload,
        };
      }
      break;

    case t.REMOVE_ERROR:
      return {
        ...state,
        message: "",
      };
      break;

    default:
      return {
        ...state,
      };
      break;
  }
};
