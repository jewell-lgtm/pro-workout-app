import {
  ArrowBackIcon,
  Box,
  IconButton,
  Image,
  ScrollView,
  Text,
} from "native-base"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Difficulty, Exercise } from "../../graphql/ExerciseQuery"
import { useBackgroundColor, useTextColor } from "../../theme"
import { PageHeader, PageSubheader } from "../type"

type Props = {
  exercise: Exercise
  difficulty: Difficulty
  onPressBack: () => void
}

export function ExerciseScreenView(props: Props): JSX.Element {
  const { exercise, difficulty, onPressBack: handlePressBack } = props
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
          onPress={handlePressBack}
        />
        <ScrollView>
          <Box height="240px" width="full" backgroundColor="#bada55">
            <Image
              resizeMode={"cover"}
              source={{ uri: difficulty.imageUrl }}
              alt={difficulty.name}
              flex={1}
            />
          </Box>
          <Box p={4}>
            <PageHeader>{difficulty.name}</PageHeader>
            <PageSubheader>{exercise.name}</PageSubheader>

            {difficulty.description.split("\n").map((line, index) => (
              <Text key={index} color={textColor}>
                {line}
              </Text>
            ))}
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  )
}
