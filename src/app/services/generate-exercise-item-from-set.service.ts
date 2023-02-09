import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { SetItem } from '../models/set-items';
import { ExerciseItem } from '../models/exercise-items';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GenerateWorkoutItemService } from './generate-workout-item.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class GenerateExerciseItemFromSetService {
  baseUrl: string = 'http://localhost:5211'
  workoutId:number=0;
  constructor(private http: HttpClient,
    private generateWorkoutItemService: GenerateWorkoutItemService) { }
  saveExercise = (exerciseItem: ExerciseItem): Observable<ExerciseItem> => {
    let exercise: Observable<ExerciseItem>
    if (exerciseItem.id) {
      const url = `${this.baseUrl}/exercise_items/${exerciseItem.id}`
      exercise = this.http.put<ExerciseItem>(url, exerciseItem, httpOptions)
    } else {     
      let payload = { exerciseName: exerciseItem.exerciseName, workoutId: 1 } //fix this later
      console.log(payload)
      exercise = this.http.post<ExerciseItem>(`${this.baseUrl}/exercise_items`, payload, httpOptions)
    }
    return exercise;
  }
  exerciseId:number;
  getExerciseId=(setItem:SetItem)=>{
    console.log("get set id subscribed")
      return this.http.get<ExerciseItem[]>(`${this.baseUrl}/exercise_items`,httpOptions).pipe(
        map(objects=>objects.find((object: { exerciseName: string; })=>object.exerciseName==setItem.exerciseName))
      )
      
  };
  exercises: string[] = [];
  createAnExerciseList = (sets: SetItem[]) => {
    let exercise: ExerciseItem = {
      'id': 0,
      'exerciseName': "",
      'workoutId': 0,
      'performedSets': []
    }
    sets.forEach((element: SetItem) => {
      if (!this.exercises.includes(element.exerciseName)) {
        console.log(!this.exercises.includes(element.exerciseName))
        console.log(element.exerciseName)
        this.exercises.push(element.exerciseName)
        exercise.exerciseName = element.exerciseName
        console.log("You subscribe, You added this exercise " + exercise.exerciseName)
        exercise.workoutId = 0
        this.saveExercise(exercise).subscribe()
      } else if (this.exercises.includes(element.exerciseName)) {
        console.log(this.exercises.includes(element.exerciseName))
        console.log("Unsubcribe")      
      }
    })
  }
}
