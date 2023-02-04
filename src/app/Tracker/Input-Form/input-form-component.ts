import { Component,Input, Output, EventEmitter} from '@angular/core';
import { MuscleGroupItems } from 'src/app/models/mucscle_group-items';
import { SetItem } from 'src/app/models/set-items';
import { GetSetItemsService } from 'src/app/services/get-set-items.service';
import { GenerateExerciseItemFromSetService } from 'src/app/services/generate-exercise-item-from-set.service';
@Component({
  selector: 'input-form-component',
  templateUrl: './input-form-component.html',
  styleUrls: ['./input-form-component.scss']
})
export class InputFormComponentComponent{
  sets: SetItem[]=[]; //just testing
  @Input() set:SetItem={
    'id': 0,
    'exercise_Name':"",
    'muscle_group':"",
    'weight':0,
    'reps':0
  };
  constructor(private getSetItemService: GetSetItemsService,
              private generateExerciseItemFromSetService: GenerateExerciseItemFromSetService){}
  @Output() addSetEvent: EventEmitter<SetItem>=new EventEmitter<SetItem>(); //Change the Any to interface Type
  addSet=()=>{
    if(this.set.exercise_Name==""||this.set.muscle_group==""||this.set.reps<=0||this.set.weight<0){
      return;
    };
    let payload={...this.set}
    console.log("Add set");
    this.getSetItemService.saveSet(payload).subscribe((set)=>{
      this.addSetEvent.emit(set);
    })
    this.sets.push(payload)
    this.generateExerciseItemFromSetService.createAnExerciseList(this.sets)
  }

  @Output() addExerciseEvent: EventEmitter<any>=new EventEmitter<any>()
  finishExercise=()=>{
    if(this.set.exercise_Name==""||this.set.muscle_group==""||this.set.reps<=0||this.set.weight<0){
      return;
    };
    this.set.exercise_Name='';
    this.set.muscle_group='';
    this.set.weight=0;
    this.set.reps=0;
    console.log("Finish exercise");
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
      "name":"Hamstrings"
  },
  {
      "id":8,
      "name":"Calves"
  }

  ];
}
