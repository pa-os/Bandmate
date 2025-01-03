import { useCallback, useMemo, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { AuthenticationInformation } from "../services/dto/Authentication";
import { AuthContext, AuthProviderProps } from "./AuthContext";

export function AuthProvider() {
  const [authInfo, setAuthInfo] = useState<AuthenticationInformation | null>(
    null
  );
  const navigate = useNavigate();

  const login = useCallback(
    async (authInfo: AuthenticationInformation) => {
      setAuthInfo(authInfo);
      navigate("/");
    },
    [navigate]
  );

  const logout = useCallback(() => {
    setAuthInfo(null);
    navigate("/", { replace: true });
  }, [navigate]);

  const value = useMemo(
    (): AuthProviderProps => ({
      authInfo,
      login,
      logout,
    }),
    [authInfo, login, logout]
  );

  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
}
