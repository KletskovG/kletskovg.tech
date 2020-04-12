import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  private infoConfig = [
    {
      text: 'Front-end',
      imageSrc: '/assets/icons/react.svg',
    },
    {
      text: 'DevOps',
      imageSrc: '/assets/icons/docker.svg',
    },
    {
      text: 'Raves',
      imageSrc: '/assets/images/rave.jpg',
    }
  ];

  private currentIndex = 0;
  public text = this.infoConfig[0].text;
  public imageSrc = this.infoConfig[0].imageSrc;
  public isVisible = 1;
  public isMobile: boolean;

  constructor() { }

  ngOnInit() {
    this.changeSlides();

    if (document.documentElement.offsetWidth <= 500) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  private animateSlides(timeout): Promise<any>  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    })
  }

  private changeSlides() {
    const configLength = this.infoConfig.length;
    setInterval(() => {
      if (this.currentIndex + 1 > configLength) {
        this.currentIndex = 0;
      }
      this.isVisible = 0;
      this.animateSlides(300)
      .then(() => {
        this.text = this.infoConfig[this.currentIndex].text;
        this.imageSrc = this.infoConfig[this.currentIndex].imageSrc;
      })
      .then(() => {
        this.animateSlides(300)
          .then(() => {
            this.currentIndex += 1;
            this.isVisible = 1;
          });
      });
    }, 1900);
  }

}
