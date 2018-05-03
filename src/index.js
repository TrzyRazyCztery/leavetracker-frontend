import React from "react";
import ReactDOM from "react-dom";
import "src/index.css";
import App from "src/layout/components/App";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "src/store/configureStore";
import { configureFakeBackend } from "src/helpers/fakeBackend";
import { copyAuthorizationDataFromStorage } from "src/shared/actions/authorizationDataActions";

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
