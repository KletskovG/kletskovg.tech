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

  public icon;

  constructor() { }

  ngOnInit() {
    this.icon = `/assets/icons/${this.iconSrc}`;
  }

}
