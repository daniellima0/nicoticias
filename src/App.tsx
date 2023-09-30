import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import News from "./pages/News";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/news",
        element: <News />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
