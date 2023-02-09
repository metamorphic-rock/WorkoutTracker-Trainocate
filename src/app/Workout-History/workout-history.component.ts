import { Component,Input,OnInit } from '@angular/core';
import { GenerateWorkoutItemService } from '../services/generate-workout-item.service';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.scss']
})
export class WorkoutHistoryComponent {
  constructor (private generateWorkoutItemService:GenerateWorkoutItemService) {};
  // ngOnInit(){
  //   this.generateWorkoutItemService.getAllWorkout().subscribe()
  // }
}
