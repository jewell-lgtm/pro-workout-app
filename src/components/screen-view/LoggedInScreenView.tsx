import { Box, Button, Text, VStack } from "native-base"
import React from "react"
import { User } from "../../config/auth"
import { useHideHeader } from "../../hooks"

type Props = {
  onSignOut: () => void
  onPressGoToExercise: () => void
  user: User
  data: unknown
}

export function LoggedInScreenView(props: Props) {
  const { user, onSignOut, onPressGoToExercise, data } = props
  useHideHeader()

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
              Hello, {user.email}
            </Text>
            <Text color="text.100">Something, something</Text>
          </VStack>
        </Box>
      </Box>
      <Box>{JSON.stringify(data, null, 4)}</Box>
      <Box py={12}>
        <Button onPress={onPressGoToExercise}>Go To Exercise</Button>
      </Box>
      <Box py={12}>
        <Button onPress={onSignOut}>Log Out</Button>
      </Box>
    </VStack>
  )
}
