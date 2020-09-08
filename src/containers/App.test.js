import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

import authReducer from "../store/reducers/auth";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const store = createStore(authReducer, applyMiddleware(thunk));
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = getByText(/Home page/i);
  expect(linkElement).toBeInTheDocument();
});

