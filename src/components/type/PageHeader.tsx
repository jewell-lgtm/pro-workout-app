import { Heading } from "native-base"
import React, { ReactNode } from "react"

export function PageHeader({ children }: { children: ReactNode }) {
  return (
    <Heading
      size="lg"
      fontWeight="600"
      color="coolGray.800"
      _dark={{ color: "warmGray.50" }}
    >
      {children}
    </Heading>
  )
}
