import t from "../utility/types";

const initialState = {
  reviews: [],
  message: "",
};

const reviewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case t.FETCH_REVIEWS:
      return {
        ...state,
        error: null,
        ...payload,
        message: "",
      };

    case t.CREATE_REVIEW:
      return {
        ...state,
        error: null,
        reviews: [...state.reviews, payload.data.review],
        message: payload.message,
      };

    case t.DELETE_REVIEW:
      return {
        ...state,
        error: null,
        reviews: state.reviews.filter((r) => r.id !== payload),
        message: "Review deleted successfully",
      };

    case t.UPDATE_REVIEW:
      return {
        ...state,
        error: null,
        reviews: state.reviews.map((r) =>
          r.id === payload.id ? payload.data.review : r
        ),
        message: payload.message,
      };

    default:
      return state;
  }
};

export default reviewReducer;
