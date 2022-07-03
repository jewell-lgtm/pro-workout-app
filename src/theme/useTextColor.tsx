import { useTheme } from "native-base"

export function useTextColor() {
  return useTheme().colors.text["100"]
}
