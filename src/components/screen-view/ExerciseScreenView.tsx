import { Box, Button, HStack, Image, Text, VStack } from "native-base"
import React from "react"
import { TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Exercise } from "../../graphql/ExerciseQuery"
import { PageHeader, PageSubheader } from "../type"

type Props = {
  exercise: Exercise
}

export function ExerciseScreenView(props: Props): JSX.Element {
  const { exercise } = props

  return (
    <Box flex={1} bg="gray.900" color="text.50">
      <SafeAreaView>
        <VStack px={4} space="4" mt="4">
          <PageHeader>{exercise.difficulties[0].name}</PageHeader>
          <PageSubheader>{exercise.name}</PageSubheader>

          <HStack alignSelf="center">
            <TouchableOpacity>
              <Text>-</Text>
            </TouchableOpacity>
            <Text fontSize="6xl">123</Text>
            <TouchableOpacity>
              <Text>+</Text>
            </TouchableOpacity>
          </HStack>

          <Image
            source={{
              uri: exercise.difficulties[0].imageUrl,
            }}
            alt={`${exercise.title} demonstration`}
            height="64"
            my="4"
            borderRadius="lg"
          />

          <Button>Finish Set</Button>
        </VStack>
      </SafeAreaView>
    </Box>
  )
}
