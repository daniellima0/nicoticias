import { Suspense, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
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
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay before hiding the loading component
        const delay = setTimeout(() => {
            setShowLoading(false);
            clearTimeout(delay);
        }, 1000); // Adjust the delay time (in milliseconds) as needed

        return () => {
            clearTimeout(delay);
        };
    }, []);

    return (
        <Suspense fallback={<Loading />}>
            {showLoading ? <Loading /> : <RouterProvider router={router} />}
        </Suspense>
    );
}

export default App;
