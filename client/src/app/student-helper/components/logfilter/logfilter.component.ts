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
  moduleNames: [string];

  constructor(private loggerService: LoggerService, private logger: LoggerComponent) {
    this.flag = false;
  }

  ngOnInit() {
  }

  showAllLogs() {
    this.loggerService.getAllLogs()
      .subscribe(
        (value) => {
          this.logger.logCards = value;
        },
        (err) => console.log(err)
      );

    this.flag = false;
  }

  showOnlyWarnings() {
    this.loggerService.getLogsWithWarning()
      .subscribe(
        (value) => {
          this.logger.logCards = value;
        },
        (err) => console.log(err)
      );

    this.flag = false;
  }

  showLogsByName(moduleName: string) {
    this.loggerService.getLogsByName(moduleName)
      .subscribe(
        (value) => {
          this.logger.logCards = value;
        },
        (err) => console.log(err)
      );
  }

  showModuleNames() {
    this.loggerService.getModuleNames()
      .subscribe(
        (value) => this.moduleNames = value,
        error => console.log(error)
      );
    this.flag = true;
  }
}
