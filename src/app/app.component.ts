import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;
  title = 'BCCP';
  isHandset$: Observable<boolean>;
  isTablet$: Subject<boolean>;
  isFullScreen$: Subject<boolean>;
  searchOpen$: BehaviorSubject<boolean>;
  navAreas: any[] = [
    { area: 'BRAKES', icon: '', url: '/' },
    { area: 'STEERING', icon: '', url: '/' },
    { area: 'SUSPENSION', icon: '', url: '/' },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public breakpointObserver: BreakpointObserver
  ) {
    this.searchOpen$ = new BehaviorSubject(false);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  noClick(event: Event) {

  }

  toggleCatMenu(event: Event, action: string) {
    event.preventDefault();
    console.log('cat-menu action: ', action + ' - ' + event);
    if (action && action === 'checkDisabled') {
      return !!this.menuTrigger.menuOpen;
    } else if (action && typeof action === 'string') {
      return this.menuTrigger[action]();
    }
  }

  navigateTo(url: string, params: any = null) {
    return this.router.navigate([`${url}`], { ...params });
  }

  toggleSearchBox() {
    const isOpen = this.searchOpen$.value;
    this.searchOpen$.next(!isOpen);
  }

  search(query: string) {
    console.log(query ? query.length > 3 : 'search must be at least 3 characters in length');
  }
}
