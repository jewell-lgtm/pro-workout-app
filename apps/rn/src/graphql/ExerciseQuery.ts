import { ExerciseQuery } from "./types"

export type Exercise = NonNullable<ExerciseQuery["exercise"]>
export type Difficulty = Exercise["difficulties"][number]
