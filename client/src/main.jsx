import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <App />
    </Provider>
  </React.StrictMode>
);
