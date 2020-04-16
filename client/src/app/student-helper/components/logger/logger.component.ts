import {Component, OnInit, Output} from '@angular/core';
import ILogger from '@models/ILogger';
import {LoggerService} from '@core/studentHelper/logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  logMessage: ILogger;

  public logCards: [ILogger];

  constructor(private loggerService: LoggerService) {
  }

  ngOnInit() {
    document.querySelector('header').remove();
    document.querySelector('footer').remove();
    this.loggerService.getAllLogs()
      .subscribe(
        (value) => this.logCards = value,
        (err) => {
          this.logMessage = {
            moduleName : 'Client',
            isWarning : true,
            warning: err
          };
          this.loggerService.sendLogs(this.logMessage);
        }
      );
  }

}
