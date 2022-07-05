import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { MyWorkoutScreenView } from "../components"
import { RootStackParamList } from "../navigation/types"

export type Props = NativeStackScreenProps<RootStackParamList, "My Workout">

export function MyWorkoutScreen(_props: Props): JSX.Element {
  return <MyWorkoutScreenView />
}
