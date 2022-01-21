import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { DialogComponent } from './dialog/dialog.component';
// import { View4Component } from './view4/view4.component';


const routes: Routes = [
  { path: 'departments', component: DepartmentsComponent },
  { path: 'dialog', component: DialogComponent },
  // { path: 'view4', component: View4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }