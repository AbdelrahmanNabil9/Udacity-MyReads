import { screen} from "@testing-library/react";
import { renderWithContext } from "./renderWrapper";
import AuthanticationPage from "../pages/AuthanticationPage";



describe("Auth rendering", () => {
    test("rendering", () => {
      renderWithContext(<AuthanticationPage />);
      expect(screen.getByTestId("auth")).toBeTruthy();
    });
    test("form input",()=>{
      renderWithContext(<AuthanticationPage />);
      expect(screen.getByLabelText('Email')).toBeTruthy();
      
    })
  });