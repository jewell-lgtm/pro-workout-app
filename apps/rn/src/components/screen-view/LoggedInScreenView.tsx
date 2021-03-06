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
import type { Smoo } from "@/data/Smoo"
import { User } from "~/config"
import { useBackgroundColor } from "~/theme"

type Props = {
  onSignOut: () => void
  onPressGoToExercises: () => void
  onPressRecordWorkout: () => void
  user: User
  colorMode: ColorMode
  toggleColorMode: () => void
  smoo: Smoo
}

export function LoggedInScreenView(props: Props) {
  const {
    user,
    onSignOut,
    onPressGoToExercises,
    onPressRecordWorkout,
    colorMode,
    toggleColorMode,
    smoo,
  } = props
  const backgroundColor = useBackgroundColor()

  return (
    <VStack flex={1} px={8} bg={backgroundColor} space={4}>
      <Text fontSize="2xl">
        Hello, {user.email}, {colorMode}
      </Text>
      <Text>{JSON.stringify(smoo, null, 2)}</Text>
      <HStack alignItems="center" alignContent="center" space={4}>
        <Text>Dark</Text>
        <Switch value={colorMode === "light"} onToggle={toggleColorMode} />
        <Text>Light</Text>
      </HStack>
      <Box>
        <Button onPress={onPressRecordWorkout}>Record a Workout</Button>
      </Box>
      <Box>
        <Button onPress={onPressGoToExercises}>Go To Exercises</Button>
      </Box>
      <Box>
        <Button onPress={onSignOut}>Log Out</Button>
      </Box>
    </VStack>
  )
}
