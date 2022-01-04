import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chronocrator';
  hours = moment().format('h');
  minutes = moment().format('mm');
  milliseconds = moment().diff(moment().startOf('day'), 'milliseconds');
  seconds = moment().diff(moment().startOf('day'), 'seconds');
  dives = Math.trunc(this.milliseconds / 45000);
  remainingMetrics = ['fifth', 'sixth', 'seventh', 'eighth'];
  currentMetrics = ['first'];

  ngAfterViewInit() {
  }

  addUnit() {
    const newElement = this.remainingMetrics.pop()!;
    this.currentMetrics.push(newElement)
  }

  updateTime() {
    this.hours = moment().format('h');
    this.minutes = moment().format('mm'); 
    this.seconds = moment().diff(moment().startOf('day'), 'seconds')
  }

}

