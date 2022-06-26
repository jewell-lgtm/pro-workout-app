import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"
import React from "react"
import { AuthProvider } from "./config/auth"
import { FirebaseProvider } from "./config/Firebase"
import { StackNavigator } from "./navigation/StackNavigator"

export function App() {
  return (
    <NativeBaseProvider>
      <FirebaseProvider>
        <NavigationContainer>
          <AuthProvider>
            <StackNavigator />
          </AuthProvider>
        </NavigationContainer>
      </FirebaseProvider>
    </NativeBaseProvider>
  )
}
