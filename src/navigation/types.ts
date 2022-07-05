import { Exercise } from "../graphql/types"

export type RootStackParamList = {
  "Log In": undefined
  "Logged In": undefined
  "Sign Up": undefined
  Exercise: {
    exercise: Exercise["id"]
    difficultyIndex: number
  }
  Exercises: undefined
}
