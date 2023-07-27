import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PosOperatorio } from "./pages/PosOperatorio";
import { Cirurgia } from "./pages/Cirurgia";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pos-operatorio",
    element: <PosOperatorio />,
  },
  {
    path: "/cirurgias",
    element: <Cirurgia />,
  },
]);
