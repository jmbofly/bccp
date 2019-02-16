import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = `Ben's Classic Car Parts`;
  panelOpen$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  isHandset$: BehaviorSubject<boolean>;
  isTablet$: BehaviorSubject<boolean>;
  isFullScreen$: BehaviorSubject<boolean>;
  heroSlides = [
    { img: '../../assets/images/cars/yellow_bellair_side.jpg' },
    { img: '../../assets/images/cars/black_chevy_side.jpg' },
    { img: '../../assets/images/cars/silver_camero_side.jpg' },
    { img: '../../assets/images/cars/yellow_bellair_side.jpg' },
  ];

  aboutTiles = [
    {title: 'about title', imgURL: '', icon: `shopping_cart`},
    {title: 'about title', imgURL: '', icon: `speaker_notes`},
    {title: 'about title', imgURL: '', icon: `access_time`},
    {title: 'about title', imgURL: '', icon: `announcement`},
  ];
  constructor(public breakpointObserver: BreakpointObserver) {
    this.panelOpen$ = new BehaviorSubject(true);
  }

  ngOnInit() {
    const body: HTMLElement = document.querySelector('.mat-sidenav-content');
    const angle: HTMLElement = body.querySelector('.border-angle-top');
    const scrollTop: number = body.scrollTop;

    if(scrollTop > 500) {
      body.addEventListener<'scroll'>('scroll', (parallaxEvent: UIEvent) => {
        console.log('scroll', parallaxEvent);
      })
    }
  }

  togglePanel($event?: Event | string, panelName?: string) {

  }

}
