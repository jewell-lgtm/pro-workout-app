import { WorkoutPlanQuery } from "./types"

export type WorkoutPlanExercise = NonNullable<
  WorkoutPlanQuery["exerciseSet"]
>["exercises"][number]
