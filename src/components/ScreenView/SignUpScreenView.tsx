import React, { useCallback, useState } from "react"
import { Button, SafeAreaView, Text, TextInput } from "react-native"
import tw from "tailwind-rn"

export function SignUpScreenView({
  onSignUp,
  onPressLogIn: handlePressLogIn,
  error,
}: {
  onSignUp: (email: string, password: string) => void
  onPressLogIn: () => void
  error: null | Error
}): JSX.Element {
  const [email, _setEmail] = useState("")
  const [password, setPassword] = useState("")
  const setEmail = useCallback(
    (email: string) => _setEmail(email.toLocaleLowerCase()),
    [_setEmail]
  )
  const handlePressSignUp = useCallback(() => {
    onSignUp(email, password)
  }, [onSignUp])

  return (
    <SafeAreaView>
      <Text>Time to sign up, mate</Text>
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
      <Button title={"Sign Up"} onPress={handlePressSignUp} />
      <Button title={"Log In"} onPress={handlePressLogIn} />
    </SafeAreaView>
  )
}
