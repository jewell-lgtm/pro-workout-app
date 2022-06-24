import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { useCallback, useState } from "react"
import { Button, SafeAreaView, Text, TextInput } from "react-native"
import tw from "tailwind-rn"
import { useFirebase } from "../config/Firebase"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Sign Up">

export function SignUp(props: Props): JSX.Element {
  const {
    navigation: { navigate },
  } = props
  const [email, _setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<null | Error>(null)
  const setEmail = useCallback(
    (email: string) => _setEmail(email.toLocaleLowerCase()),
    [_setEmail]
  )
  const firebase = useFirebase()
  const handlePressSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (e) {
      setError(e)
    }
  }
  const handlePressLogIn = async () => {
    navigate("Log In")
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
      <Button title={"Sign Up"} onPress={handlePressSignUp} />
      <Button title={"Log In"} onPress={handlePressLogIn} />
    </SafeAreaView>
  )
}
