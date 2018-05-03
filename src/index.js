import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./layout/components/App";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { configureFakeBackend } from "./helpers/fakeBackend";
import { copyAuthorizationDataFromStorage } from "./shared/actions/authorizationDataActions";

configureFakeBackend();
const store = configureStore();
store.dispatch(copyAuthorizationDataFromStorage);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
