import { OverlayRef } from '@angular/cdk/overlay';

export class MenuMobileOverlayRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
