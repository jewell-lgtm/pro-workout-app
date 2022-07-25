import { Heading } from "native-base"
import React, { ReactNode } from "react"
import { useTextColor } from "../../theme"

export function PageSubheader({ children }: { children: ReactNode }) {
  const textColor = useTextColor()
  return (
    <Heading mt="1" color={textColor} fontWeight="medium" size="xs" mb={4}>
      {children}
    </Heading>
  )
}
