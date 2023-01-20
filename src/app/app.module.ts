import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputFormComponentComponent } from './Tracker/Input-Form/input-form-component';
import { OutputTableComponentComponent } from './Tracker/Output-Table/output-table-component';
import { WorkoutSummaryComponentComponent } from './sections/workout-summary/workout-summary.component';
import { HeaderComponent } from './sections/Home/Header/header.component';
import { FooterComponent } from './sections/Home/Footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TableHeaderComponent } from './Tracker/table-header/table-header.component';




@NgModule({
  declarations: [
    AppComponent,
    InputFormComponentComponent,
    OutputTableComponentComponent,
    WorkoutSummaryComponentComponent,
    HeaderComponent,
    FooterComponent,
    TableHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
