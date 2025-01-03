import { createBrowserRouter } from "react-router";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import { AuthProvider } from "../contexts/AuthProvider";
import RequireAuth from "./RequireAuth";

const publicRoutes = [
  {
    path: "login",
    element: <LoginPage />,
  },
];

const restrictedRoutes = [
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
];

export const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [...publicRoutes, ...restrictedRoutes],
  },
]);
