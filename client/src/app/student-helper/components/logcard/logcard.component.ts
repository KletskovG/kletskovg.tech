import {Component, Input, OnInit} from '@angular/core';
import ILogger from '@models/ILogger';

@Component({
  selector: 'app-logcard',
  templateUrl: './logcard.component.html',
  styleUrls: ['./logcard.component.scss']
})
export class LogcardComponent implements OnInit {

  @Input() card: ILogger;

  constructor() { }

  ngOnInit() {
  }

}
