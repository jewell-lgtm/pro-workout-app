import { WorkoutPlanQuery } from "./types"

export type WorkoutPlanExercise = NonNullable<
  WorkoutPlanQuery["exercisePlan"]
>["exercises"][number]
