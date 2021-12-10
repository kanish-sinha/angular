import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { ExercisePipePipe } from './exercise3/exercise-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { Exercise4Component } from './exercise4/exercise4.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    ExercisePipePipe,
    Exercise4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
