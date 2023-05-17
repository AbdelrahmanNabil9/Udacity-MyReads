import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/index";

export function renderWithContext(element: React.ReactElement) {
  render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
}

