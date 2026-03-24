import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import Technology from "../components/technology/Technology";
import Projects from "../components/projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Main,
        }
        , 
        {
            path: "stack",
            Component: Technology
        }
        ,
        {
            path: "project",
            Component: Projects
        }
    ]
  },
]);