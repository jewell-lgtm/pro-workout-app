import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useCallback } from "react"
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
  const handlePressGoToExercise = useCallback(() => {
    navigate("Exercises")
  }, [navigate])

  return (
    <LoggedInScreenView
      user={user}
      onSignOut={handleSignOut}
      onPressGoToExercise={handlePressGoToExercise}
    />
  )
}
