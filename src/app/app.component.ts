import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chronocrator';
  hours = moment().format('h')
  minutes = moment().format('mm')
  milliseconds = moment().diff(moment().startOf('day'), 'milliseconds');
  seconds = moment().diff(moment().startOf('day'), 'seconds');
  dives = Math.trunc(this.milliseconds / 45000);
}


