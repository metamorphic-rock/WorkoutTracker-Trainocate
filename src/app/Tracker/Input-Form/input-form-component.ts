import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MuscleGroupItems } from 'src/app/models/mucscle_group-items';
import { SetItem } from 'src/app/models/set-items';
@Component({
  selector: 'input-form-component',
  templateUrl: './input-form-component.html',
  styleUrls: ['./input-form-component.scss']
})
export class InputFormComponentComponent{

  @Input() exerciseSet:SetItem={
    'exercise_id':2,
    'exercise_Name':"Row",
    'muscle_group':"Back",
    'weight':60,
    'reps':12
  };
  @Output() addSetEvent: EventEmitter<SetItem>=new EventEmitter<SetItem>(); //Change the Any to interface Type
  addSet=()=>{
    console.log("Add set");
    this.addSetEvent.emit(this.exerciseSet);
  }

  @Output() addExerciseEvent: EventEmitter<any>=new EventEmitter<any>()
  finishExercise=()=>{
    console.log("Finish exercise");
  }
  cardTitle: string="Log you Exercises Here";
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
