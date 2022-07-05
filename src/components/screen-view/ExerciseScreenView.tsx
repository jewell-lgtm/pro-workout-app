import {
  ArrowBackIcon,
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  ScrollView,
  Text,
} from "native-base"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Difficulty, Exercise } from "../../graphql/ExerciseQuery"
import { useBackgroundColor, useTextColor } from "../../theme"
import { Doable } from "../../types"
import { PageSubheader } from "../type"

type Props = {
  exercise: Exercise
  difficulty: Difficulty
  goBack: Doable
  previousDifficulty: Doable
  nextDifficulty: Doable
}

export function ExerciseScreenView(props: Props): JSX.Element {
  const { exercise, difficulty, goBack, previousDifficulty, nextDifficulty } =
    props

  const backgroundColor = useBackgroundColor()
  const textColor = useTextColor()

  return (
    <Box flex={1} bg={backgroundColor} color={textColor}>
      <SafeAreaView>
        <IconButton
          position="absolute"
          top={8}
          left={4}
          icon={<ArrowBackIcon color={textColor} />}
          zIndex={1}
          disabled={!goBack.canDo}
          onPress={goBack.do}
        />
        <ScrollView>
          <Box height="240px" backgroundColor="#bada55">
            <Image
              resizeMode={"cover"}
              source={{ uri: difficulty.imageUrl }}
              alt={difficulty.name}
              flex={1}
            />
          </Box>
          <Box p={4}>
            <Heading>{difficulty.name}</Heading>
            <PageSubheader>{exercise.name}</PageSubheader>

            {difficulty.description.split("\n").map((line, index) => (
              <Text key={index} color={textColor}>
                {line}
              </Text>
            ))}
          </Box>
        </ScrollView>

        <HStack space={4} p={4}>
          <Button
            isDisabled={!previousDifficulty.canDo}
            onPress={previousDifficulty.do}
            flex={1}
          >
            Easier Difficulty
          </Button>
          <Button
            isDisabled={!nextDifficulty.canDo}
            onPress={nextDifficulty.do}
            flex={1}
          >
            Harder Difficulty
          </Button>
        </HStack>
      </SafeAreaView>
    </Box>
  )
}
