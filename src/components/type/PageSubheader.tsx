import { Heading } from "native-base"
import React, { ReactNode } from "react"

export function PageSubheader({ children }: { children: ReactNode }) {
  return (
    <Heading
      mt="1"
      _dark={{
        color: "warmGray.200",
      }}
      color="coolGray.600"
      fontWeight="medium"
      size="xs"
    >
      {children}
    </Heading>
  )
}
