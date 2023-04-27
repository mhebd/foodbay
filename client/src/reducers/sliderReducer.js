import t from "../utility/types";

const initialState = {
  slides: [],
  message: "",
};

const sliderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case t.FETCH_SLIDERS:
      return {
        ...state,
        error: null,
        ...payload,
        message: "",
      };

    case t.CREATE_SLIDER:
      return {
        ...state,
        error: null,
        slides: [...state.slides, payload.data.slider],
        message: payload.message,
      };

    case t.DELETE_SLIDER:
      return {
        ...state,
        error: null,
        slides: state.slides.filter((s) => s.id !== payload),
        message: "Slider deleted successfully",
      };

    case t.UPDATE_SLIDER:
      return {
        ...state,
        error: null,
        slides: state.slides.map((s) =>
          s.id === payload.id ? payload.data.slider : s
        ),
        message: payload.message,
      };

    default:
      return state;
  }
};

export default sliderReducer;
