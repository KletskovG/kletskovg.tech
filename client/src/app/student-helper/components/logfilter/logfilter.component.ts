import { Component, OnInit } from '@angular/core';
import {LoggerService} from '@core/studentHelper/logger.service';
import {LoggerComponent} from '../logger/logger.component';

@Component({
  selector: 'app-logfilter',
  templateUrl: './logfilter.component.html',
  styleUrls: ['./logfilter.component.scss']
})
export class LogfilterComponent implements OnInit {

  flag: boolean;

  constructor(private loggerService: LoggerService, private logger: LoggerComponent) {
    this.flag = true;
  }

  ngOnInit() {
  }

  showAllLogs(event) {
    this.loggerService.getAllLogs()
      .subscribe(
        (value) => {
          console.log(value);
          this.logger.logCards = value;
        },
        (err) => console.log(err)
      );
  }

  sortByData(flag: boolean) {
    this.flag = flag;
  }

}
