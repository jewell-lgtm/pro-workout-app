import firebase from "firebase";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
} from "react";
import { getFirebase } from "../config/Firebase";

type User = {
  id: string;
};

type AuthContextType = null | User;

const AuthContext = createContext<AuthContextType>(null);

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const { children } = props;
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextType => useContext(AuthContext);

export const useUser = (): User => {
  const user = useAuth();
  if (!user) {
    // TODO: something fancier than this
    throw new Error("Routing Error, user is required to view this screen");
  }
  return user;
};

export const useSignUpEmailPassword = (
  onSuccess: (user: firebase.auth.UserCredential) => void,
  onError: (error: Error) => void
) => {
  return useCallback(
    async (email: string, password: string): Promise<void> => {
      await getFirebase()
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(onSuccess)
        .catch(onError);
    },
    [onSuccess, onError]
  );
};
