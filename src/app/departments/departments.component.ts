import { Component, OnInit } from '@angular/core';
import Departments  from '../../data/departments.json'; 
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

interface Departments {
  name: String;
  subjects: String;
}

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: any;
  constructor( public http:HttpClient,
    public dialog: MatDialog){ }

    openDialog() {
      this.dialog.open(DialogComponent)
    }

  ngOnInit(): void {
    this.http.get('https://my-json-server.typicode.com/rlussier/data/departments')
    .subscribe((data)=>this.displayDepartment(data));

  }

  displayDepartment(data: any) { 
    this.departments = data;
  }
}


