import { useColorModeValue } from "native-base"

export function useTextColor() {
  return useColorModeValue("text.700", "text.100")
}
