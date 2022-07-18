import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import {
  ArrowBackIcon,
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  Input,
  KeyboardAvoidingView,
  Text,
  VStack,
} from "native-base"
import React, { useCallback, useState } from "react"
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native"
import { Difficulty, Exercise } from "../../graphql/ExerciseQuery"
import { useBackgroundColor, useTextColor } from "../../theme"
import { PageSubheader } from "../type"

interface Props {
  exercise: Exercise
  difficulty: Difficulty
}

export function RecordWorkoutScreenView(props: Props) {
  const { exercise, difficulty } = props
  const backgroundColor = useBackgroundColor()
  const textColor = useTextColor()
  const { goBack } = useNavigation()
  const dismissKeyboard = useCallback(() => Keyboard.dismiss(), [Keyboard])
  const [completedReps, setCompletedReps] = useState<null | number>(null)
  const handleChangeText = useCallback<(text: string) => void>(
    (text) => {
      setCompletedReps(safeParseInt(text))
    },
    [setCompletedReps]
  )
  const handlePressComplete = useCallback(() => {
    console.log("completedReps", completedReps)
  }, [completedReps])

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <Box backgroundColor={backgroundColor} flex={1}>
        <Box height="240px">
          <IconButton
            position="absolute"
            top={8}
            left={4}
            icon={<ArrowBackIcon color={textColor} />}
            zIndex={1}
            onPress={goBack}
          />
          <Image
            resizeMode={"cover"}
            source={{ uri: difficulty.imageUrl }}
            alt={difficulty.name}
            flex={1}
          />
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.6))"]}
            locations={[0.05, 1]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 80,
            }}
          />
        </Box>
        <SafeAreaView>
          <KeyboardAvoidingView px={4} pt={4}>
            <Heading>{difficulty.name}</Heading>
            <PageSubheader>{exercise.name}</PageSubheader>
            <VStack space={4}>
              <Text>Your Target Reps: 50</Text>
              <Input
                keyboardType="numeric"
                textAlign="center"
                variant="unstyled"
                borderWidth={0}
                borderBottomWidth={2}
                _light={{
                  color: "coolGray.800",
                  borderBottomColor: "coolGray.500",
                }}
                _dark={{
                  color: "coolGray.400",
                  borderBottomColor: "coolGray.100",
                }}
                rounded={0}
                value={isNumber(completedReps) ? `${completedReps}` : undefined}
                onChangeText={handleChangeText}
                placeholder="50"
              />
              <Button
                disabled={!isNumber(completedReps)}
                onPress={handlePressComplete}
              >
                Complete
              </Button>
            </VStack>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Box>
    </TouchableWithoutFeedback>
  )
}

function isNumber(v: unknown): v is number {
  return typeof v === "number" && v > -1
}

function safeParseInt(v: string): number | null {
  const parsed = parseInt(v, 10)
  if (parsed === parsed) return parsed
  return null
}
