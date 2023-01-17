import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponentComponent } from './Tracker/Input-Form/input-form-component';
import { OutputTableComponentComponent } from './Tracker/Output-Table/output-table-component';
import { WorkoutSummaryComponentComponent } from './sections/workout-summary/workout-summary.component';
import { HeaderComponent } from './sections/Home/Header/header.component';
import { FooterComponent } from './sections/Home/Footer/footer.component';
import { TableRowComponent } from './Tracker/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponentComponent,
    OutputTableComponentComponent,
    WorkoutSummaryComponentComponent,
    HeaderComponent,
    FooterComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
