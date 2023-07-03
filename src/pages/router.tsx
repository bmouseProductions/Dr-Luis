import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { PosOperatorio } from "./PosOperatorio";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pos-operatorio",
    element: <PosOperatorio />,
  },
]);
