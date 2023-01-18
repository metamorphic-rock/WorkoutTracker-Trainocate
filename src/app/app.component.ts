import { Component } from '@angular/core';
import {SetItem} from './models/set-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formEventHandler=(payload:any)=>{
    console.log("handling form event handler");
    console.log(payload);
  }

}
