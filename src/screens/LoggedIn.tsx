import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { Button, SafeAreaView, Text } from "react-native"
import { useSignOut, useUser } from "../config/auth"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Logged In">

export function LoggedIn(_props: Props): JSX.Element {
  const user = useUser()

  const handleSignOut = useSignOut()

  return (
    <SafeAreaView>
      <Text>You are logged in as {user.email}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </SafeAreaView>
  )
}
