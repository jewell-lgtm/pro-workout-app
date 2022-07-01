import { extendTheme, NativeBaseProvider } from "native-base"
import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const customTheme = extendTheme({
  useSystemTheme: false,
  initialColorSet: "dark",
})

export function AppNativeBaseProvider({ children }: Props) {
  return <NativeBaseProvider theme={customTheme}>{children}</NativeBaseProvider>
}
