import { Component,Input } from '@angular/core';
import {SetItem} from './models/set-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() set: SetItem;
  setItems: SetItem[]=[];
  formEventHandler=(payload:SetItem)=>{
    console.log("handling form event handler");
    console.log(payload);
    let newSet={...payload};
    this.setItems.push(newSet);
    console.log(this.setItems.length);
  };

}
