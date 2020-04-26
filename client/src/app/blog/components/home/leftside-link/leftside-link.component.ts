import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leftside-link',
  templateUrl: './leftside-link.component.html',
  styleUrls: ['./leftside-link.component.scss']
})
export class LeftsideLinkComponent implements OnInit {

  @Input() text: string;
  @Input() link: string;
  @Input() description: string;
  @Input() iconSrc: string;
  @Input() width: number;
  @Input() height: number;

  public icon;
  public _width = '';
  public _height = '';

  constructor() {

  }

  ngOnInit() {
    this.icon = `/assets/icons/${this.iconSrc}`;
    if (this.width) {
      this._width = `${this.width}px`;
    }
    if (this.height) {
      this._height = `${this.height}px`;
    }
  }

}
