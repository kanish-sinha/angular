import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { ExercisePipePipe } from './exercise3/exercise-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Exercise4Component } from './exercise4/exercise4.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Exercise5Component } from './exercise5/exercise5.component';
import { PracticeComponent } from './practice/practice.component';
import { LoginComponent } from './login/login.component';
import { Exercise6Component } from './exercise6/exercise6.component';
import { Exercise7Component } from './exercise7/exercise7.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Exercise8Component } from './exercise8/exercise8.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    ExercisePipePipe,
    Exercise4Component,
    Exercise5Component,
    PracticeComponent,
    LoginComponent,
    Exercise6Component,
    Exercise7Component,
    ReactiveFormComponent,
    Exercise8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
