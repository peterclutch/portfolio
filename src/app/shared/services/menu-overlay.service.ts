import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { MenuMobileComponent } from '../../core/layout/menu-mobile/menu-mobile.component';
import { MenuMobileOverlayRef } from '../../core/layout/menu-mobile/menu-mobile-overlay-ref';

interface FilePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: false,
  panelClass: 'menu-panel'
};

@Injectable()
export class MenuOverlayService {

  // Inject overlay service
  constructor(private injector: Injector, private overlay: Overlay) { }

  open(config: FilePreviewDialogConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new MenuMobileOverlayRef(overlayRef);

    // Inject overlay ref
    const injectionTokens = new WeakMap();
    injectionTokens.set(MenuMobileOverlayRef, dialogRef);
    const injector = new PortalInjector(this.injector, injectionTokens);

    // Create ComponentPortal that can be attached to a PortalHost
    const filePreviewPortal = new ComponentPortal(MenuMobileComponent, null, injector);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(filePreviewPortal);

    // Subscribe to a stream that emits when the backdrop was clicked
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    // Return remote control
    return dialogRef;
  }

  private createOverlay(config: FilePreviewDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: FilePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    return new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
  }
}
