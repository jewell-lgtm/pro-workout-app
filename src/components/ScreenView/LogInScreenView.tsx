import React, { useCallback, useState } from "react"
import { Button, SafeAreaView, Text, TextInput } from "react-native"
import tw from "tailwind-rn"

type Props = {
  onLogIn: (email: string, password: string) => void
  loginWithGoogle: { ready: boolean; onPress: () => void }
  onPressSignUp: () => void
  error: null | Error
}

export function LogInScreenView(props: Props) {
  const { error, onLogIn, onPressSignUp, loginWithGoogle } = props
  const [email, _setEmail] = useState("")
  const [password, setPassword] = useState("")
  const setEmail = (email: string) => _setEmail(email.toLocaleLowerCase())
  const handlePressLogIn = useCallback(() => {
    onLogIn(email, password)
  }, [email, password, onLogIn])

  return (
    <SafeAreaView>
      <TextInput
        style={tw("border-b-2 bg-white")}
        autoFocus={true}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={tw("border-b-2 bg-white")}
        autoFocus={true}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {error && <Text>{error.message}</Text>}
      <Button title={"Log In"} onPress={handlePressLogIn} />
      <Button
        title={"Log In With Google"}
        disabled={!loginWithGoogle.ready}
        onPress={loginWithGoogle.onPress}
      />
      <Button title={"Sign Up"} onPress={onPressSignUp} />
    </SafeAreaView>
  )
}
