import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack"
import { useTheme } from "native-base"
import React from "react"
import { RootStackParamList } from "./types"
import { useAuth } from "@/config"
import { LoggedInScreen, LogInScreen, SignUpScreen } from "@/screens"
import { useBackgroundColor } from "@/theme"

const Stack = createNativeStackNavigator<RootStackParamList>()

export function StackNavigator(): JSX.Element {
  const { user } = useAuth()
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
