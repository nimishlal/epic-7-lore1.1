import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 trash = [
   {
     title:' my project 1', desc: 'trash', nfo: 'something else'
   },
   {
    title:' my project 2', desc: 'trash2', nfo: 'something else2'
  },
  {
    title:' my project 3', desc: 'trash3', nfo: 'something else3'
  }
 ];
  constructor() { }

  ngOnInit() {
  }

}
