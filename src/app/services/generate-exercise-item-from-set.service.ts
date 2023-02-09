import { Injectable, OnDestroy, OnInit } from '@angular/core';
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
  baseUrl: string = 'http://localhost:5211'

  constructor(private http: HttpClient) { }
  saveExercise=(exerciseItem: ExerciseItem): Observable<ExerciseItem> => {
    let exercise: Observable<ExerciseItem>
    if (exerciseItem.id) {
      const url = `${this.baseUrl}/exercise_items/${exerciseItem.id}`
      exercise = this.http.put<ExerciseItem>(url, exerciseItem, httpOptions)
    } else {
      let payload={exerciseName:exerciseItem.exerciseName, workoutId:1}
      console.log(payload)
      exercise = this.http.post<ExerciseItem>(`${this.baseUrl}/exercise_items`, payload, httpOptions)
    }
    
    return exercise;
  }
  exercises: string[]=[];
  createAnExerciseList=(sets:SetItem[])=>{
    let exercise: ExerciseItem={
      'id':0,
      'exerciseName':"",
      'workoutId':0,
      'performedSets':[]
    }
    console.log(this.exercises)
    let newExerciseNumber: number=0;
    let subscribed:boolean=false;
    sets.forEach((element:SetItem)=>{
      if(!this.exercises.includes(element.exerciseName)){
        console.log(!this.exercises.includes(element.exerciseName))
        console.log(element.exerciseName)
        this.exercises.push(element.exerciseName)
        exercise.exerciseName=element.exerciseName
        // exercise.workoutId=1
        console.log("You subscribe, You added this exercise "+exercise.exerciseName)
        //console.log(this.exercises)
        exercise.workoutId=0
        this.saveExercise(exercise).subscribe()
      }else if(this.exercises.includes(element.exerciseName)){
        console.log(this.exercises.includes(element.exerciseName))
        console.log("Unsubcribe")
        //console.log(this.exercises)
        // var saveExerciseSubscription= this.saveExercise(exercise).subscribe()
        // saveExerciseSubscription.unsubscribe()        
      }  
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
