import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import featuredReducer from "./featuredReducer";
import productReducer from "./productReducer";
import sliderReducer from "./sliderReducer";
import reviewReducer from "./reviewReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  slider: sliderReducer,
  review: reviewReducer,
  featured: featuredReducer,
  error: errorReducer,
});
