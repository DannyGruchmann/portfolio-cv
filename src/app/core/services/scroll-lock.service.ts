import { Injectable } from '@angular/core';

const LOCK_CLASS = 'is-scroll-locked';

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
