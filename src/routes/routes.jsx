import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ProjectPage from "../pages/ProjectPage/ProjectPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path : '/',
          element: <Home/>
        }
      ]
    },
    {
      path : '/projects',
      element: <ProjectPage/>
    }
  ]);

export default router;