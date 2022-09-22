import { Component, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  subj = new BehaviorSubject(0);
  constructor() {
    this.subj.subscribe((data) => console.log(data, '1er observer'));

    this.subj.next(8);

    
    this.subj.next(Math.random());

    this.subj.subscribe((data) => console.log(data, '2e observer'));

  }
}
