import { renderWithContext } from "./renderWrapper";
import { screen } from "@testing-library/react";
import BookDescribtionPage from "../pages/BookDescribtionPage";

describe("BookDetails Component is rendered", () => {
  test("render without params, using link without id for example", () => {
    renderWithContext(<BookDescribtionPage />);
    expect(screen.getByText("No book details To Display")).toBeTruthy();
  });
});
