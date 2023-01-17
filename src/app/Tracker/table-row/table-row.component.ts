import { Component,Input } from '@angular/core';
import {SetItem} from '../../models/set-items';


@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {
  @Input() set: SetItem;
}
