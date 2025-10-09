import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../Root/Root";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import ErrorPage from "../Components/ErrorPage/ErrorPage";





const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('/data.json'),
        Component: Home
      },
      {
        path: '/apps',
        loader: () => fetch('/data.json'),
        Component: Apps
      },
      {
        path: '/installation',
        Component: Installation
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      },
     



    ]
  },

]);

export default router