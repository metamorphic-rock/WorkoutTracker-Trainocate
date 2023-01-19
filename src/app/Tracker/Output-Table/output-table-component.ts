import { Component,Input,Output, EventEmitter } from '@angular/core';
import {SetItem} from '../../models/set-items';

@Component({
  selector: 'output-table-component',
  templateUrl: './output-table-component.html',
  styleUrls: ['./output-table-component.scss']
})
export class OutputTableComponentComponent {
  @Input() set: SetItem;
  EditSet=()=>{};
  @Output() deleteSetEvent: EventEmitter<any>=new EventEmitter<any>();
  DeleteSet=()=>{
    console.log("Delete set");
    console.log(this.set);
    this.deleteSetEvent.emit(this.set);
  };
}
