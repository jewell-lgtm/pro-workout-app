import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack"
import { useTheme } from "native-base"
import React from "react"
import { useAuth } from "../config/auth"
import {
  ExerciseScreen,
  ExercisesScreen,
  LoggedInScreen,
  LogInScreen,
  SignUpScreen,
} from "../screens"
import { useBackgroundColor } from "../theme/useBackgroundColor"
import { useTextColor } from "../theme/useTextColor"
import { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackNavigator(): JSX.Element {
  const user = useAuth()
  const screenOptions = useScreenOptions()

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {!user ? (
        <>
          <Stack.Screen name="Log In" component={LogInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Logged In" component={LoggedInScreen} />
          <Stack.Screen
            name="Exercise"
            component={ExerciseScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Exercises" component={ExercisesScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

const useScreenOptions = () => {
  const {
    colors: {
      text: { 100: headerTintColor },
    },
  } = useTheme()
  const backgroundColor = useBackgroundColor()
  const textColor = useTextColor()

  const screenOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor },
    headerTitleStyle: {
      fontWeight: "bold",
      color: headerTintColor,
    },
    headerTintColor,
  }
  return screenOptions
}
