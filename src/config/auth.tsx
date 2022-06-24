import firebase from "firebase"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { useFirebase } from "./Firebase"

export type User = firebase.User

type AuthContextType = { user: User | null }

const AuthContext = createContext<AuthContextType>({ user: null })

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const { children } = props
  const [user, setUser] = useState<null | User>(null)
  const firebase = useFirebase()

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [firebase])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => useContext(AuthContext)

export const useUser = (): User => {
  const { user } = useAuth()
  if (!user) {
    // TODO: something fancier than this
    throw new Error("Routing Error, user is required to view this screen")
  }
  return user
}

export function useSignOut() {
  const firebase = useFirebase()
  return async () => {
    console.log(await firebase.auth().signOut())
  }
}
