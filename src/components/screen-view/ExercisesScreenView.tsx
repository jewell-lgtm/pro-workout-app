import { Box, Text } from "native-base"
import React from "react"
import { WorkoutPlanQuery } from "../../graphql/types"

type Exercise = NonNullable<
  WorkoutPlanQuery["exercisePlan"]
>["exercises"][number]

interface Props {
  exercises: Exercise[]
}
export function ExercisesScreenView(props: Props) {
  const { exercises } = props
  return (
    <Box>
      {exercises.map((exercise) => (
        <Text key={exercise.id}>{exercise.name}</Text>
      ))}
    </Box>
  )
}
