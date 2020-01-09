import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash: Student[] = [
    {
      fName: 'Jon',
      lName: 'Stewart',
      sName: 'JohnStewart',
      pNumber: 4444444444,
    },
    {
      fName: 'Nimish',
      lName: 'Lal',
      sName: 'NimishLal',
      pNumber: 1233334455,
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
