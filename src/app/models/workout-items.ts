import { Time } from "@angular/common"
import { ExerciseItem } from "./exercise-items"

export interface WorkoutItem{
    "workoutID": number
    "workoutTitle": string
    "exercisesPerformed": ExerciseItem[]
    "date": Date
    "time": Time
}