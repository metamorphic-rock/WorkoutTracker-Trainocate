import { Injectable } from '@angular/core';
import { WorkoutItem } from '../models/workout-items';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class GenerateWorkoutItemService {

  baseUrl: string = 'http://localhost:5000'

  constructor(private http: HttpClient) { }
  getAllWorkout = (): Observable<WorkoutItem[]> => {
    let workouts: Observable<WorkoutItem[]>
    workouts = this.http.get<WorkoutItem[]>(`${this.baseUrl}/workout_items`, httpOptions)
    return workouts
  }
  saveWorkout =(workoutItem:WorkoutItem): Observable<WorkoutItem>=>{
    let workout: Observable<WorkoutItem>
    if (workoutItem.id) {
      const url = `${this.baseUrl}/workout_items/${workoutItem.id}`
      workout = this.http.put<WorkoutItem>(url, workoutItem, httpOptions)
    } else {
      workout = this.http.post<WorkoutItem>(`${this.baseUrl}/workout_items`, workoutItem, httpOptions)
    }
    return workout
  }
}
