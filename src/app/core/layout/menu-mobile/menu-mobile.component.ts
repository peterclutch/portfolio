import { Component, OnInit } from '@angular/core';
import { MenuMobileOverlayRef } from './menu-mobile-overlay-ref';
import { Router } from '@angular/router';

@Component({
  selector: 'ph-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  links = [{
    name: 'Bio',
    directTo: '/bio'
  }, {
    name: 'Projects',
    directTo: '/projects'
  }];

  constructor(
    private router: Router,
    public modalRef: MenuMobileOverlayRef
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.modalRef.close();
  }

  public goToLink(route: string): void {
    this.router.navigate([route]);
    this.close();
  }
}
