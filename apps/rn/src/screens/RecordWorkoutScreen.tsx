import React from "react"

import {
  DisplayError,
  LoadingFullScreenView,
  RecordWorkoutScreenView,
} from "../components"
import { useExerciseQuery } from "../graphql/types"

export function RecordWorkoutScreen() {
  const { data, loading, error } = useExerciseQuery({
    variables: {
      id: 1,
    },
  })

  const exercise = data?.exercise
  const difficulty = exercise?.difficulties[0]

  if (loading) {
    return <LoadingFullScreenView />
  }
  if (!data || !!error || !exercise || !difficulty) {
    return <DisplayError error={error as Error} />
  }
  return <RecordWorkoutScreenView exercise={exercise} difficulty={difficulty} />
}
