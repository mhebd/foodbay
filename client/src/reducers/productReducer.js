import t from "../utility/types";

const initialState = {
  products: [],
  featuredProducts: [],
  specialProducts: [],
  message: "",
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case t.FETCH_PRODUCTS:
      return {
        ...state,
        ...payload,
      };

    case t.FETCH_FEATURED_PRODUCTS:
      return {
        ...state,
        featuredProducts: [...state.featuredProducts, ...payload.products],
      };

    case t.FETCH_SPECIAL_PRODUCTS:
      return {
        ...state,
        specialProducts: [...state.specialProducts, ...payload.products],
      };

    case t.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload.data.product],
        message: payload.message,
      };

    case t.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((p) => p.id != payload),
        message: "Product deleted successfully",
      };

    case t.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((p) =>
          p.id == payload.id ? payload.data.product : p
        ),
        message: "Product updated successfully",
      };

    default:
      return state;
  }
};

export default productReducer;
