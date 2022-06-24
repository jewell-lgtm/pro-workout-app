import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"

export function useHideHeader() {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [])
}