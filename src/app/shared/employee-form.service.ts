import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeFormService {
  overlayRef: any;

  constructor(private overlay: Overlay) { } open<T>(component: ComponentType<T>,) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'overlay-backdrop',
      hasBackdrop: true,
      panelClass: 'overlay-panel',
      width: 600,
      
    });

    const portal = new ComponentPortal(component);
    const componentref = overlayRef.attach(portal);
    // Close the dialog using backdropClick()
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach()
    })
    // this.close.subscribe(res => {
    //   overlayRef.detach()
    // })
  }
}
