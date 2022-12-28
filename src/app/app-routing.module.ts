import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Admin_dashboard/dashboard/dashboard.component';
import { HomeComponent } from './Admin_dashboard/home/home.component';
import { StudentsComponent } from './Admin_dashboard/students/students.component';
import { TrainingsComponent } from './Admin_dashboard/trainings/trainings.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './student-dashboard/profile/profile.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'trainings',component:TrainingsComponent},
  {path:'students',component:StudentsComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
