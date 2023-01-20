import { Component,Input } from '@angular/core';
import { WorkoutSummary } from 'src/app/models/workout-summary';
import { CalculateVolumeService } from 'src/app/services/calculate-volume.service';

@Component({
  selector: 'workout-summary-component',
  templateUrl: './workout-summary.component.html',
  styleUrls: ['./workout-summary.component.scss']
})
export class WorkoutSummaryComponentComponent {
  show: boolean=false;
  showSummary=()=>{
    if(this.show==false){
      this.show=true;
    }else{
      this.show=false;
    }
    console.log("Show summary button was clicked");
    console.log(this.show);
  };
  constructor(private calculateVolumeService: CalculateVolumeService){}
  @Input() workoutSummary: WorkoutSummary={
    chest:{totalSets:0,totalVolume:0},
    back:{totalSets:0,totalVolume:0},
    shoulders:{totalSets:0,totalVolume:0},
    arms:{totalSets:0,totalVolume:0},
    core:{totalSets:0,totalVolume:0},
    quads:{totalSets:0,totalVolume:0},
    hamstring:{totalSets:0,totalVolume:0},
    calve:{totalSets:0,totalVolume:0}
  }
}
