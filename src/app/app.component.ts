import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chronocrator';
  hours = moment().diff(moment().startOf('day'), 'hours').toString();
  minutes = moment().format('mm');
  milliseconds = moment().diff(moment().startOf('day'), 'milliseconds');
  seconds = moment().diff(moment().startOf('day'), 'seconds');
  // dives = Math.trunc(this.milliseconds / 45000);
  remainingMetrics = [
    {
      duration: 2700000,
      agent: "antelope",
      product: "an escape"
    }
  ];
  currentMetrics = [
    {
      duration: 2700000,
      agent: "spider",
      product: "a web"
    }

  ];

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

