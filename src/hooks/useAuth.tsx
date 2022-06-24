import React, { createContext, ReactNode, useContext } from "react";

type User = {
  id: string;
};

type AuthContextType = null | User;

const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider = (props: { children: ReactNode }): JSX.Element => {
  const { children } = props;
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
