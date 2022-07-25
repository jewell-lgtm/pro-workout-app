import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Box, Text } from "native-base"
import React, { useMemo, useState } from "react"
import { DisplayError, ExerciseScreenView } from "../components"
import { useExerciseQuery } from "../graphql/types"
import { RootStackParamList } from "../navigation/types"
import { Doable } from "../types"

type Props = NativeStackScreenProps<RootStackParamList, "Exercise">

export function ExerciseScreen(props: Props): JSX.Element {
  const {
    navigation,
    route: { params },
  } = props

  const {
    data: { exercise = undefined } = {},
    error,
    loading,
  } = useExerciseQuery({
    variables: {
      id: params.exercise,
    },
  })
  const [difficultyIndex, setDifficultyIndex] = useState(0)
  const goBack = useMemo<Doable>(
    () => ({
      canDo: true,
      do: () => navigation.goBack(),
    }),
    [navigation]
  )
  const previous = useMemo<Doable>(
    () => ({
      canDo: difficultyIndex > 0,
      do: () => {
        setDifficultyIndex(difficultyIndex - 1)
      },
    }),
    [difficultyIndex, setDifficultyIndex]
  )
  const next = useMemo<Doable>(
    () => ({
      canDo: difficultyIndex + 1 < (exercise?.difficulties.length ?? 0),
      do: () => {
        setDifficultyIndex(difficultyIndex + 1)
      },
    }),
    [exercise, difficultyIndex, setDifficultyIndex]
  )

  if (error) {
    return <DisplayError error={error} />
  }

  if (loading || !exercise) {
    return (
      <Box>
        <Text>Loading…</Text>
      </Box>
    )
  }

  return (
    <ExerciseScreenView
      exercise={exercise}
      difficulty={exercise.difficulties[difficultyIndex]}
      goBack={goBack}
      previousDifficulty={previous}
      nextDifficulty={next}
    />
  )
}
