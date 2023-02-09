import { Component, Input, OnInit } from '@angular/core';
import { SetItem } from '../../models/set-items';
import { WorkoutSummary } from '../../models/workout-summary';
import { CalculateVolumeService } from '../../services/calculate-volume.service';
import { GetSetItemsService } from '../../services/get-set-items.service';
import { GenerateExerciseItemFromSetService } from '../../services/generate-exercise-item-from-set.service';
import { GenerateWorkoutItemService } from 'src/app/services/generate-workout-item.service';
import { WorkoutItem } from 'src/app/models/workout-items';

@Component({
  selector: 'app-tracker-index',
  templateUrl: './tracker-index.component.html',
  styleUrls: ['./tracker-index.component.scss']
})
export class TrackerIndexComponent implements OnInit {
  @Input() workout: WorkoutItem = {
    'id': 0,
    'workoutTitle': "",
    'date': new Date,
    "exercisesPerformed": []
  }

  @Input() set: SetItem;
  setItems: SetItem[] = [];
  workoutSummary: WorkoutSummary = {
    chest: { totalSets: 0, totalVolume: 0 },
    back: { totalSets: 0, totalVolume: 0 },
    shoulders: { totalSets: 0, totalVolume: 0 },
    arms: { totalSets: 0, totalVolume: 0 },
    core: { totalSets: 0, totalVolume: 0 },
    quads: { totalSets: 0, totalVolume: 0 },
    hamstring: { totalSets: 0, totalVolume: 0 },
    calve: { totalSets: 0, totalVolume: 0 }
  }
  ngOnInit(): void {    //calling service
    this.getSetItemsService.getAllSet().subscribe((set) => {
      this.setItems = set;
      this.updateSummary();
    })
  }

  constructor(private calculateVolumeService: CalculateVolumeService,
    private getSetItemsService: GetSetItemsService,
    private generateExerciseFromSetService: GenerateExerciseItemFromSetService,
    private generateWorkoutItemService: GenerateWorkoutItemService) { }
  updateSummary = () => {
    this.workoutSummary.chest.totalVolume = this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems, "Chest");
    this.workoutSummary.chest.totalSets = this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems, "Chest");

    this.workoutSummary.back.totalVolume = this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems, "Back");
    this.workoutSummary.back.totalSets = this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems, "Back");

    this.workoutSummary.shoulders.totalVolume = this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems, "Shoulders");
    this.workoutSummary.shoulders.totalSets = this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems, "Shoulders");

    this.workoutSummary.arms.totalVolume = this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems, "Arms");
    this.workoutSummary.arms.totalSets = this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems, "Arms");

    this.workoutSummary.core.totalVolume = this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems, "Core");
    this.workoutSummary.core.totalSets = this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems, "Core");

    this.workoutSummary.quads.totalVolume = this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems, "Quads");
    this.workoutSummary.quads.totalSets = this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems, "Quads");

    this.workoutSummary.hamstring.totalVolume = this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems, "Hamstrings");
    this.workoutSummary.hamstring.totalSets = this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems, "Hamstrings");

    this.workoutSummary.calve.totalVolume = this.calculateVolumeService.calculateVolumeByMuscleGroup(this.setItems, "Calves");
    this.workoutSummary.calve.totalSets = this.calculateVolumeService.calculateTotalSetsByMuscleGroup(this.setItems, "Calves");
  };
  workoutStarts: boolean = false;
  workoutId: number = 0;
  StartAndEndAWorkout = () => {
    if (this.workout.workoutTitle == "" || this.workout.date == null) {
      return;
    } else {
      if (this.workoutStarts == true) {
        this.workoutStarts = false;
        this.workout.workoutTitle = ""
        this.workout.date = new Date
      } else {
        this.workoutStarts = true;
        let payload = { ...this.workout }
        this.generateWorkoutItemService.saveWorkout(payload).subscribe()
        this.generateWorkoutItemService.getAllWorkout().subscribe(w => {
          var containsTitle = w.find(i => i.workoutTitle.toLocaleLowerCase() === this.workout.workoutTitle.toLocaleLowerCase())
          var containsDate = w.find(i => i.date === this.workout.date)
          if (containsTitle && containsDate) {
            var WorkoutId = Number(containsTitle?.id)
            this.workoutId = WorkoutId;
            return this.workoutId
          }
          return this.workoutId
        })

      }
      return this.workoutId
    }

  }

  addSetEventHandler = (payload: SetItem) => {
    payload.workoutId = this.workoutId
    console.log(payload);
    let newSet = { ...payload };
    this.setItems.push(newSet);
    console.log(this.setItems.length);
    this.updateSummary();
  };
  deleteSetEventHandler = (set: any) => { //fix the bug, workout sumarry is not updating
    console.log("handling delete set event")
    let setIndex = this.setItems.findIndex(e => e.id === set.id);
    this.setItems.splice(setIndex, 1);
    console.log(set.id);
    console.log(setIndex);
    this.updateSummary();
  }
  editSetEventHandler = () => {
    console.log("handling edit set event");
  }
}
