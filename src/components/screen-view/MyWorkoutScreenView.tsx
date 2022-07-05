import { Box, Heading } from "native-base"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useBackgroundColor } from "../../theme"

export function MyWorkoutScreenView(): JSX.Element {
  const backgroundColor = useBackgroundColor()

  return (
    <Box flex={1} backgroundColor={backgroundColor}>
      <SafeAreaView>
        <Box px={4}>
          <Heading>Today&apos;s Workout</Heading>
        </Box>
      </SafeAreaView>
    </Box>
  )
}
