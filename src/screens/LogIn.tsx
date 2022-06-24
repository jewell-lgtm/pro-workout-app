import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useCallback, useState } from "react"
import { LogInScreenView } from "../components/ScreenView/LogInScreenView"
import { useSignIn } from "../config/auth"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Log In">

export function LogIn(props: Props): JSX.Element {
  const { navigate } = props.navigation
  const [error, setError] = useState<null | Error>(null)

  const signIn = useSignIn()
  const handleLogIn = useCallback(
    async (email: string, password: string) => {
      try {
        setError(null)
        await signIn(email, password)
      } catch (e) {
        setError(e)
      }
    },
    [signIn]
  )

  const goToSignUp = () => {
    navigate("Sign Up")
  }

  return (
    <LogInScreenView
      onLogIn={handleLogIn}
      onPressSignUp={goToSignUp}
      error={error}
    />
  )
}
