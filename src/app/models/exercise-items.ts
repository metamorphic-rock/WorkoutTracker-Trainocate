import { SetItem } from "./set-items"

export interface ExerciseItem{
    "id": number
    "exerciseName": string
    "workoutId"?:number
    "performedSets": SetItem[]
}