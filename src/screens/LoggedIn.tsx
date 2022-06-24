import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { Button, SafeAreaView, Text } from "react-native"
import { useUser } from "../config/auth"
import { getFirebase } from "../config/Firebase"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Logged In">

export function LoggedIn(_props: Props): JSX.Element {
  const user = useUser()

  const handleSignOut = async () => {
    console.log(await getFirebase().auth().signOut())
  }

  return (
    <SafeAreaView>
      <Text>You are logged in as {user.email}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </SafeAreaView>
  )
}
