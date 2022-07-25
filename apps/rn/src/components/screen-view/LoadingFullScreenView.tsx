import { Box } from "native-base"
import React from "react"
import { ActivityIndicator } from "react-native"
import { useBackgroundColor } from "../../theme"

export function LoadingFullScreenView() {
  const backgroundColor = useBackgroundColor()
  return (
    <Box
      backgroundColor={backgroundColor}
      flex={1}
      justifyItems="center"
      justifyContent="center"
    >
      <ActivityIndicator size="large" />
    </Box>
  )
}
