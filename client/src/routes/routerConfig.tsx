import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import News from "../pages/News";
import AddNews from "../pages/AddNews";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/add-news",
      element: <AddNews />,
    },
  ]);
