import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

// TODO add further error handling
export default function RequireAuth() {
  const { authInfo } = useAuth();

  if (!authInfo) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
}
