import React, { useCallback, useState } from "react"
import { Button, SafeAreaView, Text, TextInput } from "react-native"
import tw from "tailwind-rn"

export function LogInScreenView(props: {
  onLogIn: (email: string, password: string) => void
  onPressSignUp: () => void
  error: null | Error
}) {
  const { error, onLogIn, onPressSignUp } = props
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
      <Button title={"Sign Up"} onPress={onPressSignUp} />
    </SafeAreaView>
  )
}
