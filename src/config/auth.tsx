import * as Google from "expo-auth-session/providers/google"
import firebase from "firebase"
import _firebase from "firebase"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { useFirebase } from "./Firebase"

export type User = firebase.User

type AuthContextType = User | null

const AuthContext = createContext<AuthContextType>(null)

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const { children } = props
  const [user, setUser] = useState<null | User>(null)
  const firebase = useFirebase()

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [firebase])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => useContext(AuthContext)

export const useUser = (): User => {
  const user = useAuth()
  if (!user) {
    // TODO: something fancier than this
    throw new Error("Routing Error, user is required to view this screen")
  }
  return user
}

export function useSignOut() {
  const firebase = useFirebase()
  return async () => {
    await firebase.auth().signOut()
  }
}

export function useSignIn() {
  const firebase = useFirebase()
  return async (email: string, password: string) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  }
}

export function useSignUp() {
  const firebase = useFirebase()
  return async (email: string, password: string) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
  }
}

export function useLoginWithGoogle(): {
  ready: boolean
  error: null | Error
  signIn: () => void
} {
  const firebase = useFirebase()
  const [error, setError] = useState<null | Error>(null)
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "1034448682989-gstrmbr9aq9q4l3inl8h6pmtsdmvm2gm.apps.googleusercontent.com",
  })

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params

      const auth = firebase.auth()
      // const provider = new _firebase.auth.GoogleAuthProvider()
      const credential = _firebase.auth.GoogleAuthProvider.credential(id_token)

      auth.signInWithCredential(credential).catch((e) => {
        setError(e)
      })
    }
  }, [response])

  return { ready: !!request, error, signIn: () => promptAsync() }
}
