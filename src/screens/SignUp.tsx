import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useCallback, useState } from "react"
import { SignUpScreenView } from "../components/ScreenView/SignUpScreenView"
import { useSignUp } from "../config/auth"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Sign Up">

export function SignUp(props: Props): JSX.Element {
  const {
    navigation: { navigate },
  } = props
  const signUp = useSignUp()
  const [error, setError] = useState<null | Error>(null)
  const handleSignUp = useCallback(
    async (email: string, password: string) => {
      try {
        await signUp(email, password)
      } catch (e) {
        setError(e)
      }
    },
    [signUp]
  )
  const handlePressLogin = useCallback(() => {
    navigate("Log In")
  }, [navigate])

  return (
    <SignUpScreenView
      onSignUp={handleSignUp}
      error={error}
      onPressLogIn={handlePressLogin}
    />
  )
}
