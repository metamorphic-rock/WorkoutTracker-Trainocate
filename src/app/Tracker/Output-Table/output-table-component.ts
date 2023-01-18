import { Component,Input } from '@angular/core';
import {SetItem} from '../../models/set-items';

@Component({
  selector: 'output-table-component',
  templateUrl: './output-table-component.html',
  styleUrls: ['./output-table-component.scss']
})
export class OutputTableComponentComponent {
  @Input() set: SetItem;
}
