import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ContentService } from '@/core/content/content.service';
import { Footer } from '@/layout/footer/footer';
import { Header } from '@/layout/header/header';
import { GoUpButton } from '@/shared/components/go-up-button/go-up-button';

/** Root shell: header, routed page content, footer, and the scroll-to-top button. */
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
    // The router scrolls to anchors via window.scrollTo and puts the section's top
    // edge at y=0. The fixed header sits on top of that and would cover it. CSS
    // scroll-padding-top doesn't help here — it only applies when the browser itself
    // scrolls, not for window.scrollTo — so the offset is subtracted here instead.
    this.viewportScroller.setOffset(() => [0, this.headerHeight()]);
  }

  /**
   * Measured instead of read from the CSS token: --header-height is in rem and
   * changes at the breakpoint. The header is always exactly this tall, even with the
   * mobile menu open — that overlay hangs off the nav block, not the header.
   */
  private headerHeight(): number {
    const header = document.querySelector('.site-header');
    return header ? header.getBoundingClientRect().height : 0;
  }
}
