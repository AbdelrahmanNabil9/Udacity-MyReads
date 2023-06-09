import BookShelf from "../components/BookShelf";
import { renderWithContext } from "./renderWrapper";
import { screen } from "@testing-library/react";

describe("BookShelf Component is rendered with no shelf data", () => {
  test("renders", () => {
    renderWithContext(<BookShelf shelf={"read"} books={[
      
{      id: "1",
      authors: [],
      title: "",
      description: "",
      imageLinks: {
        smallThumbnail: "",
        thumbnail: "",
      },
      shelf: "",
      subtitle: "",
    }

    ]} title={"Read"} onRenderShelf={function (): void {
        throw new Error("Function not implemented.");
    } } />);
    expect(screen.getByText("No books on this shelf, try adding new ones")).toBeTruthy();
  });
});
