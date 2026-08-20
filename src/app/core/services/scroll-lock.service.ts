import { Injectable } from '@angular/core';

const LOCK_CLASS = 'is-scroll-locked';

/**
 * Locks body scroll while an overlay (dialog, mobile menu) is open.
 * Reference-counted so two overlays can be open at once without the first one's
 * close() prematurely unlocking scroll for the second.
 */
@Injectable({ providedIn: 'root' })
export class ScrollLockService {
  private openOverlays = 0;

  lock(): void {
    this.openOverlays += 1;
    document.body.classList.add(LOCK_CLASS);
  }

  release(): void {
    this.openOverlays = Math.max(0, this.openOverlays - 1);
    if (this.openOverlays === 0) {
      document.body.classList.remove(LOCK_CLASS);
    }
  }
}
