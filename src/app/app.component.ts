import { Component, OnInit } from '@angular/core';
// import * as Student from '../data/students.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FilterAppTest';

  familyName = ['Ruiz', 'Burns', 'Hobbs', 'Battle', 'Hahn', 'Collins', 'Avila', 'Leonard', 'Horn', 'Burch', "O'neill", 'Hammond']
  givenName = ['Jackie', 'Marilyn', 'Jeffrey', 'Blake', 'Derrick', 'Nancy', 'Krista', 'Crystal', 'Tia', 'Kathleen', 'Mitchell', 'William']
  dob = ['1990-07-08', '1991-11-21', '1993-10-15', '1984-07-23', '1995-01-07', '1991-11-21', '1993-10-15', '1984-07-23']
  admitDate = ['2016-05-04 13:24:17-0500']
  anticipatedGraduationDate= ['2018-05-03', '2018-11-03']
  mentor = ['Conway, Aaron', 'Jefferson, Dusty', 'McMahon, Trent', 'McIntosh, Destiny', 
  'Harding, Sue', 'Ballard, Kaylee', 'McConnell, Cindy', 'McLead, Rex', 'Meyer, Sam']
  // student = {
  //   'familyName': 'Ruiz',
  //   'givenName': 'Jackie'
  // }
  ngOnInit(){
  
  }
}


