import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import "./styles.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./utils/theme.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
