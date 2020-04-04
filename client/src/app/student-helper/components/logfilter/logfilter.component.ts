import { Component, OnInit } from '@angular/core';
import {LoggerService} from '@core/studentHelper/logger.service';

@Component({
  selector: 'app-logfilter',
  templateUrl: './logfilter.component.html',
  styleUrls: ['./logfilter.component.scss']
})
export class LogfilterComponent implements OnInit {

  flag: boolean;

  constructor(private loggerService: LoggerService) {
    this.flag = true;
  }

  ngOnInit() {
  }

  showAllLogs(event) {
    this.loggerService.getAllLogs()
      .subscribe(
        (value) => console.log(value),
        (err) => console.log(err)
      )
    return !this.flag;
  }

  sortByData(flag: boolean) {
    this.flag = flag;
  }

}
