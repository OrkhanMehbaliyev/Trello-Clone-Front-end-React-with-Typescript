import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import authService from "../services/auth-service";
import { ILoginProps } from "../types/types";

interface AuthContextType {
  user: string | null;
  login: (user: ILoginProps) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<string | null>(authService.getCurrentUser());

  useEffect(() => {
    if (user) checkUser(user);
  }, []);

  const checkUser = async (token: string) => {
    const result = await authService.checkUser(token);
    console.log(result);
    if (result) {
      setUser(token);
    } else {
      setUser(null);
    }
  };

  const login = async (user: ILoginProps) => {
    const data = await authService.login(user);
    setUser(data.token);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const contextValue = {
    user,
    logout,
    login,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
