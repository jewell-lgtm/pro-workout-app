import { Heading } from "native-base"
import React, { ReactNode } from "react"
import { useTextColor } from "../../theme"

export function PageHeader({ children }: { children: ReactNode }) {
  const textColor = useTextColor()
  return (
    <Heading size="lg" fontWeight="600" color={textColor}>
      {children}
    </Heading>
  )
}
