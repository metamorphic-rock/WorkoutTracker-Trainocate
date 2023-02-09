import { Injectable } from '@angular/core';
import { SetItem } from '../models/set-items';
import { GenerateExerciseItemFromSetService } from './generate-exercise-item-from-set.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class GetSetItemsService {
  baseUrl: string = 'http://localhost:5211'

  constructor(private http: HttpClient, private generateExerciseItemFromSetService:GenerateExerciseItemFromSetService) { 
  }

  getAllSet = (): Observable<SetItem[]> => {
    let sets: Observable<SetItem[]>
    sets = this.http.get<SetItem[]>(`${this.baseUrl}/set_items`, httpOptions)
    return sets
  }
  getSetById = (id: number): Observable<SetItem> => {
    let set = this.http.get<SetItem>(`${this.baseUrl}/set_items/${id}`, httpOptions)
    return set
  }
  saveSet = (setItem: SetItem): Observable<SetItem> => {
    let set: Observable<SetItem>
    if (setItem.id) {
      const url = `${this.baseUrl}/set_items/${setItem.id}`
      set = this.http.put<SetItem>(url, setItem, httpOptions)
    } else {
      let payload = {
        exerciseName: setItem.exerciseName, muscleGroup: setItem.muscleGroup,
        weight: setItem.weight, reps: setItem.reps, workoutId: 1, exerciseId: setItem.exerciseId
      } //fix this later
      console.log(payload)
      set = this.http.post<SetItem>(`${this.baseUrl}/set_items`, payload, httpOptions)
    }
    return set
  }
  deleteSet = (id: number): Observable<SetItem> => {
    let set = this.http.delete<SetItem>(`${this.baseUrl}/set_items/${id}`, httpOptions)
    return set
  }
  editSet = (setItem: SetItem, id: number): Observable<SetItem> => {
    let set = this.http.put<SetItem>(`${this.baseUrl}/set_items/${id}`, httpOptions)
    return set
  }
}
