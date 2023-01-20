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
    'id': 0,
    'exercise_Name':"",
    'muscle_group':"",
    'weight':0,
    'reps':0
  };
  @Output() addSetEvent: EventEmitter<SetItem>=new EventEmitter<SetItem>(); //Change the Any to interface Type
  addSet=()=>{
    if(this.exerciseSet.exercise_Name==""||this.exerciseSet.muscle_group==""||this.exerciseSet.reps<=0||this.exerciseSet.weight<0){
      return;
    };
    console.log("Add set");
    this.exerciseSet.id=new Date().getTime();;
    console.log(this.exerciseSet.id);
    this.addSetEvent.emit(this.exerciseSet);
  }

  @Output() addExerciseEvent: EventEmitter<any>=new EventEmitter<any>()
  finishExercise=()=>{
    if(this.exerciseSet.exercise_Name==""||this.exerciseSet.muscle_group==""||this.exerciseSet.reps<=0||this.exerciseSet.weight<0){
      return;
    };
    this.exerciseSet.exercise_Name='';
    this.exerciseSet.muscle_group='';
    this.exerciseSet.weight=0;
    this.exerciseSet.reps=0;
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
