import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useCallback, useState } from "react"
import { Button, SafeAreaView, Text, TextInput } from "react-native"
import tw from "tailwind-rn"
import { useFirebase } from "../config/Firebase"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Login">

export function LogIn(props: Props): JSX.Element {
  const { navigate } = props.navigation
  const [email, _setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<null | Error>(null)
  const setEmail = useCallback(
    (email: string) => _setEmail(email.toLocaleLowerCase()),
    [_setEmail]
  )
  const firebase = useFirebase()
  const handleLogIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      setError(e)
    }
  }

  const goToSignUp = () => {
    navigate("Sign Up")
  }

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
      <Button title={"Log In"} onPress={handleLogIn} />
      <Button title={"Sign Up"} onPress={goToSignUp} />
    </SafeAreaView>
  )
}
