import { Component,Input, Output, EventEmitter} from '@angular/core';
import { MuscleGroupItems } from 'src/app/models/mucscle_group-items';
import { SetItem } from 'src/app/models/set-items';
import { ExerciseItem } from 'src/app/models/exercise-items';
import { GetSetItemsService } from 'src/app/services/get-set-items.service';
import { GenerateExerciseItemFromSetService } from 'src/app/services/generate-exercise-item-from-set.service';
@Component({
  selector: 'input-form-component',
  templateUrl: './input-form-component.html',
  styleUrls: ['./input-form-component.scss']
})
export class InputFormComponentComponent{
  sets: SetItem[]=[]; //just testing
  @Input() workoutId:number=0 //connect this to the tracker-index
  @Input() set:SetItem={
    'id': 0,
    'exerciseName':"",
    'exerciseId':0,
    'workoutId':0,
    'muscleGroup':"",
    'weight':0,
    'reps':0
  };
  constructor(private getSetItemService: GetSetItemsService,
              private generateExerciseItemFromSetService: GenerateExerciseItemFromSetService){}
  @Output() addSetEvent: EventEmitter<SetItem>=new EventEmitter<SetItem>(); //Change the Any to interface Type
  addSet=()=>{
    if(this.set.exerciseName==""||this.set.muscleGroup==""||this.set.reps<=0||this.set.weight<0){
      return;
    };
    let payload={...this.set}
    payload.workoutId=this.workoutId
    this.getSetItemService.saveSet(payload).subscribe((set)=>{
      this.addSetEvent.emit(set);
    })
    this.sets.push(payload) //just testing
    this.generateExerciseItemFromSetService.createAnExerciseList(this.sets)
    
  }

  @Output() addExerciseEvent: EventEmitter<any>=new EventEmitter<any>()
  finishExercise=()=>{
    if(this.set.exerciseName==""||this.set.muscleGroup==""||this.set.reps<=0||this.set.weight<0){
      return;
    };
    this.set.exerciseName='';
    this.set.muscleGroup='';
    this.set.weight=0;
    this.set.reps=0;
  }
  cardTitle: string="Log your Exercises Here";
  muscleGroup: MuscleGroupItems[]=[
    {
      "id":1,
      "name":"Chest"
  },
  {
      "id":2,
      "name":"Back"
  },
  {
      "id":3,
      "name":"Shoulders"
  },
  {
      "id":4,
      "name":"Arms"
  },
  {
      "id":5,
      "name":"Core"
  },
  {
      "id":6,
      "name":"Quads"
  },
  {
      "id":7,
      "name":"Glutes and Hamstrings"
  },
  {
      "id":8,
      "name":"Calves"
  }
  ];
}
