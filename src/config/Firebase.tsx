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

let Firebase: firebase.app.App

const getFirebase = (): firebase.app.App => {
  if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig)
  }
  return Firebase
}

const FirebaseContext = createContext<firebase.app.App>(getFirebase())

export function FirebaseProvider({ children }: { children: ReactNode }) {
  return (
    <FirebaseContext.Provider value={getFirebase()}>
      {children}
    </FirebaseContext.Provider>
  )
}

export const useFirebase = (): firebase.app.App => {
  return useContext(FirebaseContext)
}
