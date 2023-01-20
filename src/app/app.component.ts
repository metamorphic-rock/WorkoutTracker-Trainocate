import { Component,Input,OnInit } from '@angular/core';
import {SetItem} from './models/set-items';
import { WorkoutSummary } from './models/workout-summary';
import { CalculateVolumeService } from './services/calculate-volume.service';
import { GetSetItemsService } from './services/get-set-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @Input() set: SetItem;
  setItems: SetItem[]=[];
  workoutSummary: WorkoutSummary={
    chest:{totalSets:0,totalVolume:0},
    back:{totalSets:0,totalVolume:0},
    shoulders:{totalSets:0,totalVolume:0},
    arms:{totalSets:0,totalVolume:0},
    core:{totalSets:0,totalVolume:0},
    quads:{totalSets:0,totalVolume:0},
    hamstring:{totalSets:0,totalVolume:0},
    calve:{totalSets:0,totalVolume:0}
  }
  ngOnInit(): void {    //calling service
    console.log("ngOnInit is fired")
    this.getSetItemsService.getAllSet().subscribe((set)=>{
      this.setItems=set;
      this.updateSummary();
    })
  }
  constructor(private calculateVolumeService: CalculateVolumeService, 
              private getSetItemsService:GetSetItemsService){}
  updateSummary=()=>{
    this.workoutSummary.chest.totalVolume=this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems,"Chest");
    this.workoutSummary.chest.totalSets=this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems,"Chest");

    this.workoutSummary.back.totalVolume=this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems,"Back");
    this.workoutSummary.back.totalSets=this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems,"Back");

    this.workoutSummary.shoulders.totalVolume=this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems,"Shoulders");
    this.workoutSummary.shoulders.totalSets=this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems,"Shoulders");

    this.workoutSummary.arms.totalVolume=this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems,"Arms");
    this.workoutSummary.arms.totalSets=this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems,"Arms");

    this.workoutSummary.core.totalVolume=this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems,"Core");
    this.workoutSummary.core.totalSets=this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems,"Core");

    this.workoutSummary.quads.totalVolume=this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems,"Quads");
    this.workoutSummary.quads.totalSets=this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems,"Quads");

    this.workoutSummary.hamstring.totalVolume=this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems,"Hamstrings");
    this.workoutSummary.hamstring.totalSets=this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems,"Hamstrings");

    this.workoutSummary.calve.totalVolume=this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems,"Calves");
    this.workoutSummary.calve.totalSets=this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems,"Calves");
  }
  addSetEventHandler=(payload:SetItem)=>{
    console.log("handling add set event");
    console.log(payload);
    let newSet={...payload};
    this.setItems.push(newSet);
    console.log(this.setItems.length);
    this.updateSummary();
  };
  deleteSetEventHandler=(set:any)=>{ //fix the bug, workout sumarry is not updating
    console.log("handling delete set event")
    let setIndex=this.setItems.findIndex(e => e.id===set.id);
    this.setItems.splice(setIndex,1);
    console.log(set.id);
    console.log(setIndex);
    this.updateSummary();
  }
  editSetEventHandler=()=>{
    console.log("handling edit set event");
  }

}
