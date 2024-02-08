import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./page/Home";
import Blog from "./page/Blog";
import { Suspense } from "react";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={"loading"}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
