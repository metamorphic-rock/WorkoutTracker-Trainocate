import { Time } from "@angular/common"
import { ExerciseItem } from "./exercise-items"

export interface WorkoutItem{
    "id"?: number
    "workoutTitle": string
    "date": Date
    "exercisesPerformed": ExerciseItem[]
    
}