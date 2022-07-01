import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Box, Text } from "native-base"
import React from "react"
import { DisplayError, ExercisesScreenView } from "../components"
import { useWorkoutPlanQuery } from "../graphql/types"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Exercises">

export function ExercisesScreen(_props: Props): JSX.Element {
  const { data, error } = useWorkoutPlanQuery()
  if (!data || !data.exercisePlan) {
    return (
      <Box>
        <Text>Loading…</Text>
      </Box>
    )
  }
  if (error) {
    return (
      <Box>
        <DisplayError error={error} />
      </Box>
    )
  }
  return <ExercisesScreenView exercises={data.exercisePlan.exercises} />
}
