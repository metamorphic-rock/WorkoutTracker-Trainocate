import { Component,Input } from '@angular/core';
import {SetItem} from './models/set-items';
import { WorkoutSummary } from './models/workout-summary';
import { CalculateVolumeService } from './services/calculate-volume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  constructor(private calculateVolumeService: CalculateVolumeService){}
  formEventHandler=(payload:SetItem)=>{
    console.log("handling form event handler from app component");
    console.log(payload);
    let newSet={...payload};
    this.setItems.push(newSet);
    console.log(this.setItems.length);
    this.workoutSummary.chest.totalVolume=this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems,"Chest")
  };


}
