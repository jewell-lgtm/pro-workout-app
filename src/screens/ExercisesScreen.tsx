import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Box, Text } from "native-base"
import React from "react"
import { DisplayError, ExercisesScreenView } from "../components"
import { useWorkoutPlanQuery } from "../graphql/types"
import { WorkoutPlanExercise } from "../graphql/WorkoutPlanQuery"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Exercises">

export function ExercisesScreen(props: Props): JSX.Element {
  const { navigation } = props
  const { data, error } = useWorkoutPlanQuery()
  const handlePressExercise = (exercise: WorkoutPlanExercise) =>
    navigation.navigate("Exercise", {
      exercise: exercise.id,
      difficultyIndex: 0,
    })

  if (error) {
    return (
      <Box>
        <DisplayError error={error} />
      </Box>
    )
  }

  if (!data || !data.exercisePlan) {
    return (
      <Box>
        <Text>Loading…</Text>
      </Box>
    )
  }

  return (
    <ExercisesScreenView
      exercises={data.exercisePlan.exercises}
      onPressExercise={handlePressExercise}
    />
  )
}
