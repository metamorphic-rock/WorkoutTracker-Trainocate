export interface ExerciseItem{
    "id": number
    "name": string
    "workoutId"?:number,
    "weight": number[]
    "reps": number[]
}