import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { LoggedInScreenView } from "../components/ScreenView/LoggedInScreenView"
import { useSignOut, useUser } from "../config/auth"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Logged In">

export function LoggedIn(_props: Props): JSX.Element {
  const user = useUser()
  const handleSignOut = useSignOut()

  return <LoggedInScreenView user={user} onSignOut={handleSignOut} />
}
