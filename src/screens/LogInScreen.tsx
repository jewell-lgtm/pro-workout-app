import { NativeStackScreenProps } from "@react-navigation/native-stack"
import * as WebBrowser from "expo-web-browser"
import React, { useCallback, useState } from "react"
import { LogInScreenView } from "../components"
import { useLoginWithGoogle, useSignIn } from "../config/auth"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Log In">

WebBrowser.maybeCompleteAuthSession()

export function LogInScreen(props: Props): JSX.Element {
  const { navigate } = props.navigation
  const [loginError, setLoginError] = useState<null | Error>(null)

  const signIn = useSignIn()
  const handleLogIn = useCallback(
    async (email: string, password: string) => {
      try {
        setLoginError(null)
        await signIn(email, password)
      } catch (e) {
        setLoginError(e)
      }
    },
    [signIn]
  )

  const goToSignUp = () => {
    navigate("Sign Up")
  }

  const google = useLoginWithGoogle()

  return (
    <LogInScreenView
      onLogIn={handleLogIn}
      onPressSignUp={goToSignUp}
      loginWithGoogle={{ ready: google.ready, onPress: google.signIn }}
      error={loginError || google.error || null}
    />
  )
}
