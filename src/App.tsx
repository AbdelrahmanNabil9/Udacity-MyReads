import Root from "./layout/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import AuthanticationPage from "./pages/AuthanticationPage";
import BookDescribtionPage from "./pages/BookDescribtionPage";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Root outlet={<ErrorPage />} />,
      children: [
        { index: true, element: <Home /> },
        { path: "/search", element: <SearchPage /> },
        { path: "/login", element: <AuthanticationPage /> },
        { path: "/books/:bookId/details", element: <BookDescribtionPage /> },
      ],
    },
  ]);
  
  function App() {
    return <RouterProvider router={router} />;
  }
  
  export default App;
  
