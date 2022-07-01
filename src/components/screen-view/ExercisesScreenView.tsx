import { Box, ChevronRightIcon, HStack, Text } from "native-base"
import React from "react"
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native"
import { WorkoutPlanExercise } from "../../graphql/WorkoutPlanQuery"

interface Props {
  exercises: WorkoutPlanExercise[]
  onPressExercise: (exercise: WorkoutPlanExercise) => void
}

export function ExercisesScreenView(props: Props) {
  const { exercises, onPressExercise } = props

  return (
    <Box bg="gray.900" flex={1}>
      <SafeAreaView>
        <FlatList
          data={exercises}
          renderItem={({ item: exercise }) => (
            <TouchableOpacity
              key={exercise.id}
              onPress={() => onPressExercise(exercise)}
            >
              <Box bg="gray.700" mx={4} my={1} p={4} borderRadius="lg">
                <HStack>
                  <Box flex={1}>
                    <Text
                      color="text.50"
                      textTransform="uppercase"
                      isTruncated
                      fontWeight="semibold"
                    >
                      {exercise.name}
                    </Text>
                  </Box>
                  <ChevronRightIcon color="white" />
                </HStack>
              </Box>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </Box>
  )
}
