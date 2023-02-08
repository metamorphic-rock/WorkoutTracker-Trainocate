import { Injectable } from '@angular/core';
import { SetItem } from '../models/set-items';
import { ExerciseItem } from '../models/exercise-items';
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
export class GenerateExerciseItemFromSetService {
  baseUrl: string = 'http://localhost:5000'

  constructor(private http: HttpClient) { }
  saveExercise=(exerciseItem: ExerciseItem): Observable<ExerciseItem> => {
    let exercise: Observable<ExerciseItem>
    if (exerciseItem.id) {
      const url = `${this.baseUrl}/exercise_items/${exerciseItem.id}`
      exercise = this.http.put<ExerciseItem>(url, exerciseItem, httpOptions)
    } else {
      exercise = this.http.post<ExerciseItem>(`${this.baseUrl}/exercise_items`, exerciseItem, httpOptions)
    }
    return exercise;
  }
  createAnExerciseList=(sets:SetItem[])=>{
    let exercise: ExerciseItem={
      'id':0,
      'exerciseName':"",
      'workoutId':0,
      'performedSets':[]
    }
    let exercises: string[]=[]
    sets.forEach((element:SetItem)=>{
      if(!exercises.includes(element.exerciseName.toLocaleLowerCase())){
        exercises.push(element.exerciseName.toLocaleLowerCase())
        console.log(exercises)
        exercise.exerciseName=element.exerciseName;
        exercise.workoutId=0
        this.saveExercise(exercise).subscribe()
      }
      console.log("creating an exercise in generateExerciseServices")
      return exercise
    }) 
  }
    // let exerciseItems: ExerciseItem[]
    // exercises.forEach((exercise)=>{
    //   let exerciseItem: ExerciseItem={
    //     'id':0,
    //     'name':"",
    //     'reps':[],
    //     'weight':[]
    //   }
    //   exerciseItem.name=exercise;
    //   sets.forEach((element:SetItem)=>{
    //     if(exercise==element.exercise_Name.toLocaleLowerCase()){
    //       exerciseItem.weight.push(element.weight)
    //       exerciseItem.reps.push(element.reps)
    //     }else{
    //       exerciseItem.id++;
    //     }
    //     console.log(exerciseItem)
    //   })
    // })
    
}
