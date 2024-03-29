import {
  Box,
  Button,
  ColorMode,
  HStack,
  Switch,
  Text,
  VStack,
} from "native-base"
import React from "react"
import { User } from "@/config"
import { useBackgroundColor } from "@/theme"

type Props = {
  onSignOut: () => void
  user: User
  colorMode: ColorMode
  toggleColorMode: () => void
}

export function LoggedInScreenView(props: Props) {
  const { user, onSignOut, colorMode, toggleColorMode } = props
  const backgroundColor = useBackgroundColor()

  return (
    <VStack flex={1} px={8} bg={backgroundColor} space={4}>
      <Text fontSize="2xl">
        Hello, {user.email}, {colorMode}
      </Text>
      <HStack alignItems="center" alignContent="center" space={4}>
        <Text>Dark</Text>
        <Switch value={colorMode === "light"} onToggle={toggleColorMode} />
        <Text>Light</Text>
      </HStack>
      <Box>
        <Button onPress={onSignOut}>Log Out</Button>
      </Box>
    </VStack>
  )
}
