import { NativeBaseProvider } from "native-base"
import React, { ReactNode } from "react"
import { appTheme } from "@/theme"

type Props = {
  children: ReactNode
}

export function AppNativeBaseProvider({ children }: Props) {
  return <NativeBaseProvider theme={appTheme}>{children}</NativeBaseProvider>
}
