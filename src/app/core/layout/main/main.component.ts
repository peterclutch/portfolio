import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { MenuOverlayService } from '../../../shared/services/menu-overlay.service';

@Component({
  selector: 'ph-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  scrollProgress: number;
  scrollIndicator = false;

  constructor(
    private router: Router,
    private menuOverlayService: MenuOverlayService
  ) { }

  ngOnInit(): void {
    this.getScrollPosition();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollIndicator = this.findRouterData(this.router.routerState.snapshot.root.firstChild, 'hasScrollIndicator') || false;
      }
    });
  }

  showMenu() {
    this.menuOverlayService.open();
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

  // TODO move
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
