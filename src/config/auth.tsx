import firebase from "firebase";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import { getFirebase } from "./Firebase"

export type User = firebase.User

type AuthContextType = { user: User | null }

const AuthContext = createContext<AuthContextType>({ user: null })
export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const { children } = props  const [user, setUser] = useState<null | User>(null)
  useEffect(() => {
    return getFirebase()
      .auth()
      .onAuthStateChanged((user) => {
        setUser(user)
     })
  , [])

  eturn (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

eport const useAuth = (): AuthContextType => useContext(AuthContext);

export const useUser = (): User => {
  const { user } = useAuth()
  if (!user) {
    // TODO: something fancier than this
    throw new Error("Routing Error, user is required to view this screen");
  }
  return user;
};
