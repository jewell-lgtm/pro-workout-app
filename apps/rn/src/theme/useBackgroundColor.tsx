import { useColorModeValue } from "native-base"

export const useBackgroundColor = () => {
  return useColorModeValue("white", "text.900")
}
