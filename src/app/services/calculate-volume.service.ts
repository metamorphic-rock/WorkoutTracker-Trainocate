import { Injectable } from '@angular/core';
import { SetItem } from '../models/set-items';
@Injectable({
  providedIn: 'root'
})
export class CalculateVolumeService {

  constructor() { }
  calculateVolumeByMuscleGroup=(setItems:SetItem[],muscleGroup:string): number=>{
    let workoutVolume=0;
    setItems.forEach((element:SetItem) => {
      if(element.muscle_group==muscleGroup){
        workoutVolume=workoutVolume+(element.weight*element.reps)
      }
    });
    return workoutVolume;
  }
}
