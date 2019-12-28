import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.scss']
})
export class RegisterEventComponent implements OnInit {

  constructor() { }
  selected: {startDate: Date, endDate: Date};
  ngOnInit() {
  }

}
