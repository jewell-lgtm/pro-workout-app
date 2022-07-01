import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useColorModeValue, useTheme, useThemeProps } from "native-base"
import React from "react"
import { useAuth } from "../config/auth"
import {
  LoggedInScreen,
  LogInScreen,
  SignUpScreen,
  ExerciseScreen,
  ExercisesScreen,
} from "../screens"
import { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackNavigator(): JSX.Element {
  const user = useAuth()
  const theme = useTheme()
  const backgroundColor = theme.colors.light["900"]
  const headerTintColor = theme.colors.text["100"]

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor,
      }}
    >
      {!user ? (
        <>
          <Stack.Screen name="Log In" component={LogInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Logged In" component={LoggedInScreen} />
          <Stack.Screen name="Exercise" component={ExerciseScreen} />
          <Stack.Screen name="Exercises" component={ExercisesScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}
