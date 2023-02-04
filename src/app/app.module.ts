import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InputFormComponentComponent } from './Tracker/Input-Form/input-form-component';
import { OutputTableComponentComponent } from './Tracker/Output-Table/output-table-component';
import { WorkoutSummaryComponentComponent } from './Tracker/workout-summary/workout-summary.component';
import { HeaderComponent } from './sections/Home/Header/header.component';
import { FooterComponent } from './sections/Home/Footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TableHeaderComponent } from './Tracker/table-header/table-header.component';
import { TrackerIndexComponent } from './Tracker-Index/tracker-index/tracker-index.component';
import { WorkoutHistoryComponent } from './Workout-History/workout-history.component';
import { HomePageComponent } from './Home-Page/home-page.component';
import { SetItemComponent } from './Tracker-Index/Tracker-Index/set-item.component';
import { FinishedWorkoutComponent } from './Workout-History/finished-workout/finished-workout.component';

const appRoutes: Routes=[
  {path:'home',component:HomePageComponent},
  {path:'tracker',component:TrackerIndexComponent},
  {path:'workout-history',component:WorkoutHistoryComponent},
  {path:'set-item/:id',component:SetItemComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
]


@NgModule({
  declarations: [
    AppComponent,
    InputFormComponentComponent,
    OutputTableComponentComponent,
    WorkoutSummaryComponentComponent,
    HeaderComponent,
    FooterComponent,
    TableHeaderComponent,
    TrackerIndexComponent,
    WorkoutHistoryComponent,
    HomePageComponent,
    SetItemComponent,
    FinishedWorkoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
