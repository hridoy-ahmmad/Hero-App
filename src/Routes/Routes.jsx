import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../Root/Root";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";



const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            loader:()=>fetch('/data.json'),
            Component:Home
        },
        {
            path:'/apps',
            Component:Apps
        },
        {
            path:'/installation',
            Component:Installation
        },

    ]
  },
]);

export default router