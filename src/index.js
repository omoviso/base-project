import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "antd/dist/antd.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
