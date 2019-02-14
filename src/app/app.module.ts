import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from'./app-routing/app-routing.module';
import { AppMDModule } from './app-md/app-md-module';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { StudentControlPanelComponent } from './student-control-panel/student-control-panel.component';
import { HomeLandComponent } from './home-land/home-land.component';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    StudentControlPanelComponent,
    HomeLandComponent,
    AddEditStudentComponent,
    HeaderComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMDModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
