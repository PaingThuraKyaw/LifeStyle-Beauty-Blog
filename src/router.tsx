import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Layout/layout"
import Home from "./page/Home"

const Router = () => {
    const router = createBrowserRouter([
        {
            path : "/",
            element : <Layout/>,
            children : [
                {
                    index : true,
                    element : <Home/>
                }
            ]
        }
    ])
  return (
   <RouterProvider router={router} />
  )
}

export default Router
