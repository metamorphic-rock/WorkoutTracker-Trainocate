import { Component,Input } from '@angular/core';
import {SetItem} from '../../models/set-items';

@Component({
  selector: 'output-table-component',
  templateUrl: './output-table-component.html',
  styleUrls: ['./output-table-component.scss']
})
export class OutputTableComponentComponent {
  // setItems: SetItem[]=[
  //   {
  //     exercise_id:1,
  //     id:1,
  //     weight:90,
  //     reps:5
  // },
  // {
  //     exercise_id:1,
  //     id:2,
  //     weight:80,
  //     reps:10
  // },
  // {
  //     exercise_id:1,
  //     id:3,
  //     weight:80,
  //     reps:8
  // },
  // ];
  //sets: number=this.setItems.length;
  @Input() set: SetItem;
}
