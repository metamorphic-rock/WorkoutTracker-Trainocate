import { Component,Input,Output, EventEmitter } from '@angular/core';
import { GetSetItemsService } from 'src/app/services/get-set-items.service';
import {SetItem} from '../../models/set-items';

@Component({
  selector: 'output-table-component',
  templateUrl: './output-table-component.html',
  styleUrls: ['./output-table-component.scss']
})
export class OutputTableComponentComponent {
  constructor(private getSetItemService: GetSetItemsService){}
  @Input() set: SetItem;
  @Output() editSetEvent : EventEmitter<any>=new EventEmitter<any>();
  EditSet=()=>{
    console.log("Edit set");
  };
  @Output() deleteSetEvent: EventEmitter<any>=new EventEmitter<any>();
  DeleteSet=()=>{
    console.log("Delete set");
    console.log(this.set);
    let id=this.set.id
    this.getSetItemService.deleteSet(id).subscribe(()=>{
      this.deleteSetEvent.emit(this.set);
    })
  };
}
