import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
