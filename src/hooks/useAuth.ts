import { useContext } from "react";
import { AuthContext, AuthProviderProps } from "../contexts/AuthContext";

export function useAuth(): AuthProviderProps {
  return useContext(AuthContext);
}
