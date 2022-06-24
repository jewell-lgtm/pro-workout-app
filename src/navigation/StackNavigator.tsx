import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { useAuth } from "../config/auth"
import { LoggedIn, LogIn, SignUp } from "../screens"
import { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackNavigator(): JSX.Element {
  const { user } = useAuth()

  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </>
      ) : (
        <>
          <Stack.Screen name="Logged In" component={LoggedIn} />
        </>
      )}
    </Stack.Navigator>
  )
}
