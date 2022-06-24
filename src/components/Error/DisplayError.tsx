import { Box, Text } from "native-base"
import React from "react"

// can add to this later
function getDisplayText(error: Error): string {
  return error.message
}

export function DisplayError({ error }: { error: Error }) {
  return (
    <Box>
      <Text>{getDisplayText(error)}</Text>
    </Box>
  )
}
