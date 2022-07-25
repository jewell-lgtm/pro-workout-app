import { extendTheme } from "native-base"

export const appTheme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        _text: { color: "#000000" },
      },
    },
  },
  useSystemColorMode: false,
  initialColorMode: "dark",
  colors: {
    primary: {
      900: "#fee33c",
      800: "#fee33c",
      700: "#fee33c",
      600: "#fee33c",
      400: "#fee33c",
      300: "#fee33c",
      200: "#fee33c",
      100: "#fee33c",
      60: "#fee33c",
    },
  },
})
