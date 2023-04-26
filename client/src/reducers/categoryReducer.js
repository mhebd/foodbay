import t from "../utility/types";
const initialState = {
  categories: [],
  category: null,
  error: null,
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case t.FETCH_CATEGORIES:
      return {
        ...state,
        error: null,
        ...payload,
      };
      break;

    case t.CREATE_CATEGORY:
      return {
        ...state,
        error: null,
        categories: [...state.categories, payload.data.category],
      };
      break;

    case t.DELETE_CATEGORY:
      console.log("pp", payload);
      return {
        ...state,
        error: null,
        categories: state.categories.filter(
          (c) => c.id != payload.data.category.id
        ),
        ...payload,
      };
      break;

    case t.FETCH_CATEGORY_WP:
      console.log("pp", payload);
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

export default categoryReducer;
