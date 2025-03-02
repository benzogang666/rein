import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";

import Providers from "./providers/Providers";
import Router from "./router/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={Router} />
    </Providers>
  </StrictMode>
);