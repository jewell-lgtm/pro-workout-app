import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider } from "native-base"
import React from "react"
import { AppNativeBaseProvider } from "./config/AppNativeBase"
import { AuthProvider } from "./config/auth"
import { BackendProvider } from "./config/Backend"
import { FirebaseProvider } from "./config/Firebase"
import { StackNavigator } from "./navigation/StackNavigator"

export function App() {
  return (
    <AppNativeBaseProvider>
      <FirebaseProvider>
        <NavigationContainer>
          <AuthProvider>
            <BackendProvider>
              <StackNavigator />
            </BackendProvider>
          </AuthProvider>
        </NavigationContainer>
      </FirebaseProvider>
    </AppNativeBaseProvider>
  )
}
