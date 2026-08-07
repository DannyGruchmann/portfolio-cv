import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ContentService } from '@/core/content/content.service';
import { Footer } from '@/layout/footer';
import { Header } from '@/layout/header';
import { GoUpButton } from '@/shared/components/go-up-button';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header, Footer, GoUpButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly contentService = inject(ContentService);
  private readonly viewportScroller = inject(ViewportScroller);

  protected readonly skipLabel = computed(() => this.contentService.content().nav.skipToContent);

  constructor() {
    // Der Router springt Anker ueber window.scrollTo an und setzt die Oberkante der
    // Section auf y=0. Der Kopfbereich liegt fixiert darueber und wuerde sie
    // anschneiden. CSS scroll-padding-top hilft hier nicht: das greift nur, wenn der
    // Browser selbst scrollt, nicht bei window.scrollTo. Also die Hoehe hier abziehen.
    this.viewportScroller.setOffset(() => [0, this.headerHeight()]);
  }

  /**
   * Gemessen statt aus dem Token gelesen: --header-height steht in rem und aendert
   * sich am Breakpoint. Der Kopfbereich hat immer genau diese Hoehe, auch bei
   * offenem Menue — das Overlay haengt am Navigationsblock, nicht am Header.
   */
  private headerHeight(): number {
    const header = document.querySelector('.site-header');
    return header ? header.getBoundingClientRect().height : 0;
  }
}
