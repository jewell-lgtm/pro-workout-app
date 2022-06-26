import { Button, HStack, Image, Text, VStack } from "native-base"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Exercise } from "../../data"
import { useHideHeader } from "../../hooks"
import { PageHeader } from "../type"

type Props = {
  exercise: Exercise
}

export function ExerciseScreenView(props: Props): JSX.Element {
  const { exercise } = props
  useHideHeader()

  return (
    <SafeAreaView>
      <VStack px={4} space="4" mt="4">
        <PageHeader>{exercise.title}</PageHeader>

        <Image
          source={{
            uri: exercise.imageUri,
          }}
          alt={`${exercise.title} demonstration`}
          height="64"
          my="4"
          borderRadius="lg"
        />

        <HStack alignSelf="center">
          <Button>-</Button>
          <Text fontSize="6xl">123</Text>
          <Button>+</Button>
        </HStack>

        <Button>Finish Set</Button>
      </VStack>
    </SafeAreaView>
  )
}
