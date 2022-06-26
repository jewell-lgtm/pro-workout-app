import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { ExerciseScreenView } from "../components"
import { Exercise } from "../data"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Exercise">

export function ExerciseScreen(_props: Props): JSX.Element {
  const exercise: Exercise = {
    title: "Full Pushups",
    imageUri:
      "https://images.squarespace-cdn.com/content/v1/61bd05f1f151e77577ab467c/ac6d3c05-3816-47f9-9f1e-bf8f20cbb3f1/Full+Pushup+%28Top%29.jpg?format=750w",
  }
  return <ExerciseScreenView exercise={exercise} />
}
