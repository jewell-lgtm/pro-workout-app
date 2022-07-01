import { Heading } from "native-base"
import React, { ReactNode } from "react"

export function PageSubheader({ children }: { children: ReactNode }) {
  return (
    <Heading mt="1" color="text.50" fontWeight="medium" size="xs">
      {children}
    </Heading>
  )
}
