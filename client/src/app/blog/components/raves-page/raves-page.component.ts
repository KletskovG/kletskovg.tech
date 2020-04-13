import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-raves-page',
  templateUrl: './raves-page.component.html',
  styleUrls: ['./raves-page.component.scss']
})
export class RavesPageComponent implements OnInit {

  @ViewChildren("rave") divs: QueryList<ElementRef<HTMLVideoElement>>;

  
  constructor() { }
  public isTitleShowed = true;
  public carouselTranslate = '0px';
  public translateLength = 640;
  public currentSlide = 0;
  public raves = [
    {
      text: 'KHLEB | 2018',
      src: '/assets/video/khleb.mp4',
    },
    {
      text: 'SAINt JHN | 2018',
      src: '/assets/video/saintjhn.mp4',
    },
    {
      text: 'foucault pendulum | 2019',
      src: '/assets/video/pendulum.mp4',
    }
  ]
  

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    setTimeout(() => {
      this.isTitleShowed = false;
    }, 1700);
  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  public goForward() {
    this.carouselTranslate = `${Number.parseInt(this.carouselTranslate)- this.translateLength}px`;
    this.currentSlide += 1;
  }
  public goBack() {
    this.carouselTranslate = `${Number.parseInt(this.carouselTranslate) + this.translateLength}px`;
    this.currentSlide -= 1;
  }

  // public nextSlide() {
  //   const maxSlideTranslate = this.raves.length * this.translateLength;
  //   const currentTranslate = Number.parseInt(this.carouselTranslate);
  //   const slideIndex = currentTranslate / this.raves.length;

  //   if (this.currentSlide <= this.raves.) {
  //      return;
  //   } else {
  //     this.carouselTranslate = `${currentTranslate + this.translateLength}px`;
  //     // this.divs.forEach((rave, index) => {
  //     //   if (index === slideIndex) {
  //     //     rave.nativeElement.play();
  //     //   } else {
  //     //     rave.nativeElement.pause();
  //     //   }
  //     // })
  //     this.currentSlide -= 1;
  //   }
  // }

  // public prevSlide() {
  //   const maxNegativeTranslate = this.raves.length * -this.translateLength;
  //   const currentTranslate = Number.parseInt(this.carouselTranslate);

  //   if (this.currentSlide >= this.raves.length) {
  //     return;
  //   } else {
  //     this.carouselTranslate = `${currentTranslate - this.translateLength}px`;
  //     // this.divs.forEach((rave, index) => {
  //     //   if (index === slideIndex) {
  //     //     rave.nativeElement.play();
  //     //   } else {
  //     //     rave.nativeElement.pause();
  //     //   }
  //     // })
  //     this.currentSlide += 1;
  //   }
  // }

}
