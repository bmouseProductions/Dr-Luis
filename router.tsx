import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/pages/Home";
import { PosOperatorio } from "./src/pages/PosOperatorio";

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
