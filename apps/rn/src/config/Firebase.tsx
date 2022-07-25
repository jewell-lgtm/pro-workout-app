import Constants from "expo-constants"
import firebase from "firebase"
import React, { useContext } from "react"
import { createContext, ReactNode } from "react"

// Initialize Firebase

const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.apiKey,
  authDomain: Constants.manifest?.extra?.authDomain,
  projectId: Constants.manifest?.extra?.projectId,
  storageBucket: Constants.manifest?.extra?.storageBucket,
  messagingSenderId: Constants.manifest?.extra?.messagingSenderId,
  appId: Constants.manifest?.extra?.appId,
}

const FirebaseContext = createContext<firebase.app.App>(undefined as any)

export function FirebaseProvider({ children }: { children: ReactNode }) {
  return (
    <FirebaseContext.Provider
      value={
        firebase.apps.length === 0
          ? firebase.initializeApp(firebaseConfig)
          : firebase.app()
      }
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export const useFirebase = (): firebase.app.App => useContext(FirebaseContext)
