import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./index";

test("Main", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );

  expect(getByText(/Main/i)).toBeInTheDocument();
});

test("Go to other", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );

  expect(getByText(/Go to other/i)).toBeInTheDocument();
});
