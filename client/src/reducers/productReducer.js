import t from "../utility/types";

const initialState = {
  products: [],
  message: "",
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case t.FETCH_PRODUCTS:
      return {
        ...state,
        error: null,
        ...payload,
        message: "",
      };
      break;

    case t.CREATE_PRODUCT:
      return {
        ...state,
        error: null,
        products: [...state.products, payload.data.product],
        message: payload.message,
      };
      break;

    case t.DELETE_PRODUCT:
      return {
        ...state,
        error: null,
        products: state.products.filter((p) => p.id != payload),
        message: "Product deleted successfully",
      };
      break;

    case t.UPDATE_PRODUCT:
      return {
        ...state,
        error: null,
        products: state.products.map((p) =>
          p.id == payload.id ? payload.data.product : p
        ),
        message: "Product updated successfully",
      };
      break;

    default:
      return state;
      break;
  }
};

export default productReducer;
