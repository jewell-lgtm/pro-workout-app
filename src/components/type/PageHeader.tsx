import { Heading } from "native-base"
import React, { ReactNode } from "react"

export function PageHeader({ children }: { children: ReactNode }) {
  return (
    <Heading size="lg" fontWeight="600" color="text.50">
      {children}
    </Heading>
  )
}
