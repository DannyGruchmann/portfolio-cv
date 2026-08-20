import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { ContentService } from '@/core/content/content.service';

const SHOW_AFTER_PX = 600;

/** Floating scroll-to-top button, shown once the page is scrolled past SHOW_AFTER_PX. */
@Component({
  selector: 'app-go-up-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
  },
  template: `
    <button
      class="go-up"
      type="button"
      [class.go-up--visible]="isVisible()"
      [attr.tabindex]="isVisible() ? null : -1"
      [attr.aria-hidden]="isVisible() ? null : 'true'"
      [attr.aria-label]="label()"
      (click)="scrollToTop()"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  `,
  styleUrl: './go-up-button.scss',
})
export class GoUpButton {
  private readonly contentService = inject(ContentService);

  protected readonly isVisible = signal(false);
  protected readonly label = computed(() => this.contentService.content().footer.goUpLabel);

  protected onScroll(): void {
    this.isVisible.set(window.scrollY > SHOW_AFTER_PX);
  }

  protected scrollToTop(): void {
    // Respects the OS-level reduced-motion preference instead of always animating.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }
}
