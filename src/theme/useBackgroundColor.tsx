import { useTheme } from "native-base"

export const useBackgroundColor = () => {
  return useTheme().colors.text["900"]
}
