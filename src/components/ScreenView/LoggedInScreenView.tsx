import React from "react"
import { Button, SafeAreaView, Text } from "react-native"
import { User } from "../../config/auth"

type Props = {
  onSignOut: () => void
  user: User
}

export function LoggedInScreenView({ user, onSignOut: handleSignOut }: Props) {
  return (
    <SafeAreaView>
      <Text>You are logged in as {user.email}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </SafeAreaView>
  )
}
