import { useColorMode } from "native-base"
import React from "react"
import { LoggedInScreenView } from "@/components"
import { useSignOut, useUser } from "@/config"

export function LoggedInScreen(): JSX.Element {
  const user = useUser()
  const handleSignOut = useSignOut()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <LoggedInScreenView
      user={user}
      onSignOut={handleSignOut}
      colorMode={colorMode}
      toggleColorMode={toggleColorMode}
    />
  )
}
