import * as Google from "expo-auth-session/providers/google"
import Constants from "expo-constants"
import firebase from "firebase"
import _firebase from "firebase"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { useFirebase } from "./Firebase"

export type User = firebase.User

type AuthContextType = { user: User | null; token: string | null }

const AuthContext = createContext<AuthContextType>({ user: null, token: null })

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const { children } = props
  const [user, setUser] = useState<null | User>(null)
  const [userToken, setUserToken] = useState<null | string>(null)
  const firebase = useFirebase()

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setUser(null)
        setUserToken(null)
        return
      }
      user
        .getIdToken(false)
        .then((token) => {
          setUser(user)
          setUserToken(token)
        })
        .catch((e) => {
          setUser(null)
          setUserToken(null)
          throw e
        })
    })
  }, [firebase])

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      token: userToken,
    }),
    [user, userToken]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => useContext(AuthContext)

// Note: DEMANDS a user to be present, don't use in screens where this might not be set
export const useUser = (): User => {
  const { user } = useAuth()
  if (!user) {
    // TODO: something fancier than this
    throw new Error("Routing Error, user is required to view this screen")
  }
  return user
}

export const useToken = (): null | string => {
  const { token } = useAuth()
  return token
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
    clientId: Constants.manifest?.extra?.authGoogleClientId,
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
