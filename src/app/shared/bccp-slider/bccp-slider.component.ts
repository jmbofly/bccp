import { Component, Input, Output, OnInit } from '@angular/core';
import { SlickCarouselComponent as Slick } from 'ngx-slick-carousel';
export interface Slide {
  img?: string;
  el?: HTMLElement;
}

export interface Slider {
  slideLibrary: Slide[];
  sliderType?: 'img' | 'card';
  sliderConfig?: Slick['config'];
}
@Component({
  selector: 'app-bccp-slider',
  templateUrl: './bccp-slider.component.html',
  styleUrls: ['./bccp-slider.component.scss'],
})
export class BccpSliderComponent implements OnInit, Slider {
  @Input() slideLibrary: Slide[] = [];
  @Input() sliderType: 'img' | 'card';

  @Input() sliderConfig = { slidesToShow: 1, slidesToScroll: 1, arrows: false, autoplay: true, dots: true };

  constructor() {}

  ngOnInit() {}

  slickInit(event: {e: Event, slick: any}) {
    const slick = event.slick;
    console.log('slick initialized', slick);
  }

  breakpoint(e: Event) {
    console.log('breakpoint', e);
  }

  afterChange(e: Event) {
    // console.log('afterChange', e);
  }

  beforeChange(e: Event) {
    // console.log('beforeChange', e);
  }
}
