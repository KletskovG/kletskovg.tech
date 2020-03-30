import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyber-page',
  templateUrl: './cyber-page.component.html',
  styleUrls: ['./cyber-page.component.scss']
})
export class CyberPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('header').remove();
    document.querySelector('footer').remove();
  }

  public click(): void {
    window.location.href='https://codabra.org';
  }

}
