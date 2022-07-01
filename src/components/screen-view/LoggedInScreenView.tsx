import {
  Box,
  Button,
  HStack,
  Switch,
  Text,
  useColorMode,
  VStack,
} from "native-base"
import React from "react"
import { User } from "../../config/auth"

type Props = {
  onSignOut: () => void
  onPressGoToExercise: () => void
  user: User
}

export function LoggedInScreenView(props: Props) {
  const { user, onSignOut, onPressGoToExercise } = props
  const { colorMode, setColorMode } = useColorMode()

  return (
    <VStack flex={1} px={8}>
      <Box flex={1} justifyContent="center">
        <Box
          bg="primary.600"
          py="4"
          px="3"
          borderRadius="5"
          rounded="md"
          maxWidth="100%"
        >
          <VStack>
            <Text color="text.50" fontSize="2xl">
              Hello, {user.email}, {colorMode}
            </Text>

            <Text color="text.100">Something, something</Text>
          </VStack>
        </Box>
      </Box>
      <HStack alignItems="center" alignContent="center" space={4}>
        <Text>Dark</Text>
        <Switch
          value={colorMode === "light"}
          onToggle={() =>
            setColorMode(colorMode === "light" ? "dark" : "light")
          }
        />
        <Text>Light</Text>
      </HStack>
      <Box py={12}>
        <Button onPress={onPressGoToExercise}>Go To Exercise</Button>
      </Box>
      <Box py={12}>
        <Button onPress={onSignOut}>Log Out</Button>
      </Box>
    </VStack>
  )
}
