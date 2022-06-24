import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { AuthProvider } from "./config/auth"
import { FirebaseProvider } from "./config/Firebase"
import { StackNavigator } from "./navigation/StackNavigator"

export function App() {
  return (
    <FirebaseProvider>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </FirebaseProvider>
  )
}
