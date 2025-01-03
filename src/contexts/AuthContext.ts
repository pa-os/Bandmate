import { createContext } from "react";
import { AuthenticationInformation } from "../services/dto/Authentication";

export interface AuthProviderProps {
  authInfo: AuthenticationInformation | null;
  login: (userData: AuthenticationInformation) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthProviderProps>({
  authInfo: null,
  login: () => {},
  logout: () => {},
});
