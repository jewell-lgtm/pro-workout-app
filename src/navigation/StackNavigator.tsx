import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { useAuth } from "../config/auth"
import {
  LoggedInScreen,
  LogInScreen,
  SignUpScreen,
  ExerciseScreen,
} from "../screens"
import { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackNavigator(): JSX.Element {
  const user = useAuth()

  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen name="Log In" component={LogInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Logged In" component={LoggedInScreen} />
          <Stack.Screen name="Exercise" component={ExerciseScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}
