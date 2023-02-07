import { Injectable } from '@angular/core';
import { SetItem } from '../models/set-items';
import { ExerciseItem } from '../models/exercise-items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateExerciseItemFromSetService {

  constructor() { }
  
  createAnExerciseList=(sets:SetItem[])=>{
    
    let exercises: string[]=[]
    sets.forEach((element:SetItem)=>{
      if(!exercises.includes(element.exercise_Name.toLocaleLowerCase())){
        exercises.push(element.exercise_Name.toLocaleLowerCase())
      }
    })
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
    console.log("Creating exercises")
  }
}
