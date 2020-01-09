import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  // values = '';
  flip = false;
  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    alert('You Have clicked me, prepare to die!!');

  }
  // onKey(value: string) {
  //   this.values += value + ' | ';

  // }
  switch() {
    // if (this.flip) {
    //   this.flip = false;
    // } else {
    //   this.flip = true;
    // }
    this.flip = this.flip ? !this.flip : !this.flip;
  }
}
