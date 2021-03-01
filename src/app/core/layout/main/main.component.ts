import { Component, HostListener, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'ph-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('5000ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('5000ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class MainComponent implements OnInit {
  scrollProgress: number;
  scrollIndicator = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getScrollPosition();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollIndicator = this.findRouterData(this.router.routerState.snapshot.root.firstChild, 'hasScrollIndicator') || false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onScrollEvent() {
    this.getScrollPosition();
  }

  getScrollPosition() {
    const winScroll = window.scrollY;
    const height = document.body.clientHeight - window.innerHeight;
    this.scrollProgress = Math.min((winScroll / height) * 100, 100) - 100;
  }

  findRouterData(routeSnapshot: ActivatedRouteSnapshot, dataKey: string) {
    if (routeSnapshot && Object.keys(routeSnapshot.data).length > 0 && routeSnapshot.data[dataKey] !== undefined) {
      return routeSnapshot.data[dataKey];
    } else if (routeSnapshot.firstChild) {
      return this.findRouterData(routeSnapshot.firstChild, dataKey);
    } else {
      return undefined;
    }
  }
}
