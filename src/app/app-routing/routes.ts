import {  Routes } from '@angular/router';
import {AddEditStudentComponent} from '../add-edit-student/add-edit-student.component';
import {HomeLandComponent} from '../home-land/home-land.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home-land', pathMatch: 'full' },
    { path: 'add-student', component: AddEditStudentComponent },
    { path: 'home-land',      component: HomeLandComponent }];