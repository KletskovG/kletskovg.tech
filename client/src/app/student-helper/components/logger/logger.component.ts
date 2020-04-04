import { Component, OnInit } from '@angular/core';
import ILogger from '@models/ILogger';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  logCards: [ILogger];

  constructor() {
    this.logCards = [
      {id : 111, moduleName : 'Test', isWarning : false, information : 'OK', time : new Date()},
    ];
  }

  ngOnInit() {
    document.querySelector('header').remove();
    document.querySelector('footer').remove();
  }

}
