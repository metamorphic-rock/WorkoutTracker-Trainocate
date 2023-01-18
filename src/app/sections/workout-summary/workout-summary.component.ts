import { Component } from '@angular/core';

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
}
