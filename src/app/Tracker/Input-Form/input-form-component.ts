import { Component } from '@angular/core';
import { MuscleGroupItems } from 'src/app/models/mucscle_group-items';
@Component({
  selector: 'input-form-component',
  templateUrl: './input-form-component.html',
  styleUrls: ['./input-form-component.scss']
})
export class InputFormComponentComponent {
  addSet=()=>{
    console.log("Add set");
  }
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
