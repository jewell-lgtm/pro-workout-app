import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Box, Text } from "native-base"
import React, { useCallback } from "react"
import { DisplayError, ExerciseScreenView } from "../components"
import { useExerciseQuery } from "../graphql/types"
import { RootStackParamList } from "../navigation/types"

type Props = NativeStackScreenProps<RootStackParamList, "Exercise">

export function ExerciseScreen(props: Props): JSX.Element {
  const {
    navigation,
    route: { params },
  } = props
  const back = useCallback(() => {
    navigation.goBack()
  }, [navigation])
  const {
    data: { exercise = undefined } = {},
    error,
    loading,
  } = useExerciseQuery({
    variables: {
      id: params.exercise,
    },
  })

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
      difficulty={exercise.difficulties[0]}
      onPressBack={back}
    />
  )
}
