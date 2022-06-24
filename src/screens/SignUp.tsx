import { NativeStackScreenProps } from "@react-navigation/native-stack";
import firebase from "firebase";
import React, { useCallback, useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import tw from "tailwind-rn";
import { useSignUpEmailPassword } from "../hooks/useAuth";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Sign Up">;

function useSignUpScreen(_props: Props) {
  const [email, _setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | Error>(null);
  const [userCredentials, setUserCredentials] =
    useState<null | firebase.auth.UserCredential>(null);
  const setEmail = useCallback(
    (email: string) => _setEmail(email.toLocaleLowerCase()),
    [_setEmail]
  );
  const handleSignUp = useSignUpEmailPassword(setUserCredentials, setError);
  const handlePressSignUp = () => handleSignUp(email, password);
  return {
    email,
    password,
    setPassword,
    error,
    userCredentials,
    setEmail,
    handlePressSignUp,
  };
}

export function SignUp(props: Props): JSX.Element {
  const {
    email,
    password,
    setPassword,
    error,
    userCredentials,
    setEmail,
    handlePressSignUp,
  } = useSignUpScreen(props);

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
      {userCredentials && (
        <Text>{JSON.stringify(userCredentials, null, 4)}</Text>
      )}
      <Button title={"Sign Up"} onPress={handlePressSignUp} />
    </SafeAreaView>
  );
}
