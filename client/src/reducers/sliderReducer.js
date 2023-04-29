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
      break;

    case t.CREATE_SLIDER:
      return {
        ...state,
        error: null,
        slides: [...state.slides, payload.data.slide],
        message: payload.message,
      };
      break;

    case t.DELETE_SLIDER:
      return {
        ...state,
        error: null,
        slides: state.slides.filter((s) => s.id !== payload),
        message: "Slider deleted successfully",
      };
      break;

    case t.UPDATE_SLIDER:
      return {
        ...state,
        error: null,
        slides: state.slides.map((s) =>
          s.id === payload.id ? payload.data.slide : s
        ),
        message: payload.message,
      };
      break;

    case t.REMOVE_SLIDER_MSG:
      return {
        ...state,
        message: "",
      };
      break;

    default:
      return state;
  }
};

export default sliderReducer;
