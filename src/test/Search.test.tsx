import Search from "../pages/SearchPage";
import { renderWithContext } from "./renderWrapper";

describe("test", () => {
  test("renders", () => {
    renderWithContext(<Search />);
  });
});
