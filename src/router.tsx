import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PosOperatorio } from "./pages/PosOperatorio";

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
