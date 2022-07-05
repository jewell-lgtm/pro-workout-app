import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useColorMode } from "native-base"
import React from "react"
import { LoggedInScreenView } from "../components"
import { useSignOut, useUser } from "../config/auth"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Logged In">

export function LoggedInScreen(props: Props): JSX.Element {
  const {
    navigation: { navigate },
  } = props
  const user = useUser()
  const handleSignOut = useSignOut()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <LoggedInScreenView
      user={user}
      onSignOut={handleSignOut}
      onPressGoToExercises={() => {
        navigate("Exercises")
      }}
      colorMode={colorMode}
      toggleColorMode={toggleColorMode}
    />
  )
}
