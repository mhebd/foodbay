import t from "../utility/types";
const initialState = {
  featuredCards: [],
  error: null,
  message: "",
};

const featuredReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case t.FETCH_FEATUREDS:
      return {
        ...state,
        error: null,
        ...payload,
        message: "",
      };
      break;

    case t.CREATE_FEATURED:
      return {
        ...state,
        error: null,
        featuredCards: [...state.featuredCards, payload.data.featuredCard],
        message: payload.message,
      };
      break;

    case t.DELETE_FEATURED:
      return {
        ...state,
        error: null,
        featuredCards: state.featuredCards.filter((f) => f.id != payload),
        message: "Featured Card deleted success",
      };
      break;

    case t.UPDATE_FEATURED:
      return {
        ...state,
        error: null,
        featuredCards: [...state.featuredCards, payload.data.featuredCard],
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

export default featuredReducer;
