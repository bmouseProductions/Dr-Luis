import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "../src/pages/router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);
