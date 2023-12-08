import { Suspense, useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import { router } from "./routes/routerConfig";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before hiding the loading component
    const delay = setTimeout(() => {
      setShowLoading(false);
      clearTimeout(delay);
    }, 800); // Adjust the delay time (in milliseconds) as needed

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
