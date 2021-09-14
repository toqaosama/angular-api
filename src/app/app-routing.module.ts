import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { HomeComponent } from './home/home.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
{path: "home" , Component : HomeComponent},
{path: "" , Component : HomeComponent},
{path: "ls" , Component : ListTeacherComponent},
{path: "ct" , Component : CreateTeacherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
