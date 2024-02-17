import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./page/Home";
import Blog from "./page/Blog";
import { Suspense } from "react";
import BlogSearch from "./page/Blog/component/blog-search";
import BlogDetail from "./page/Blog/component/blog-detailed";
import Loader from "./components/Loader";

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
        {
          path: "/blog/:search",
          element: <BlogSearch />,
        },
        {
          path: "/blog/detail/:id",
          element: <BlogDetail />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
